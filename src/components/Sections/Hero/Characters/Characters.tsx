import { useState, useEffect, useRef, useContext, FC } from "react";
import Character from "./Character";
import SelectedContext from "../../../../context/selected-context";
import Typewriter from "typewriter-effect";
// import { ShepherdTourContext } from "react-shepherd";
import classes from "./Characters.module.scss";
import ButtonPrimary from "../../../UI/ButtonPrimary";
import { rootCertificates } from "tls";

interface Props {
  charState: (data: any) => void;
  heroRef: React.MutableRefObject<null>;
}

const Characters: FC<Props> = ({ charState, heroRef }) => {
  // const navigate = useNavigate();
  const [leftChar, setLeftChar] = useState(0);
  const [frontChar, setFrontChar] = useState(1);
  const [rightChar, setRightChar] = useState(2);
  const ctx = useContext(SelectedContext);

  const charactersRef = useRef<HTMLDivElement>(null);
  const charactersColRef = useRef<HTMLDivElement>(null);
  // const tour = useContext(ShepherdTourContext);

  const ctaButtonHandler = () => {
    setTimeout(() => {
      // tour?.start();
    }, 1200);
    if (ctx.setCtaButtonClicked !== undefined) {
      if (!ctx.ctaButtonClicked?.clicked) {
        ctx.setCtaButtonClicked({ clicked: true });
        const root = document.documentElement;

        root.style.setProperty("--body-grayscale", "0");
      } else ctx.setCtaButtonClicked({ clicked: false });
    }
    calcCharWidth();
    //disabling blue outline on drag

    if (charactersColRef?.current) {
      charactersColRef.current.ondragstart = () => {
        return false;
      };
    }
  };
  const init = () => {
    ctx.ctaButtonHandler = ctaButtonHandler;
  };
  init();

  useEffect(() => {
    const charStateData = {
      leftChar,
      frontChar,
      rightChar,
    };
    charState && charState(charStateData);
  }, [leftChar, frontChar, rightChar]);

  const CONST_POS = [0, 1, 2];

  // ********************************************************
  const debounce = (func: Function, timeout = 300) => {
    let timer: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const calcCharWidth = () => {
    let characterImgComputedWidth: number;
    let charactersComputedWith: number;
    if (charactersRef.current) {
      characterImgComputedWidth = charactersRef.current.offsetWidth;
      charactersComputedWith = characterImgComputedWidth * 0.4;
      let root = document.documentElement;
      root.style.setProperty(
        "--characters-width",
        charactersComputedWith + "px"
      );
    }
  };
  const processChange = debounce(calcCharWidth, 1000);

  window.addEventListener("resize", processChange);

  // ********************************************************

  const wrapRotate = function (num: number, direc = -1) {
    if (direc == 1) {
      return (num + 1) % 3;
    }

    if (direc == -1) {
      if (num == 0) {
        return num + 2;
      }
      return (num - 1) % 3;
    } else return 0;
  };

  // *****************************************************
  const renderContentHandler = (constPos: number) => {
    ctx.setWhichSelected?.(constPos);
  };

  ctx.rotateCharactersHandler = (e) => {
    const setChars = (direc: number) => {
      setLeftChar(wrapRotate(leftChar, direc));
      setFrontChar(wrapRotate(frontChar, direc));
      setRightChar(wrapRotate(rightChar, direc));
    };

    let direc = 0;

    let charData;
    if (typeof e === "number") {
      charData = e;
    } else charData = +e.target?.dataset.character;

    let charConstPos = +e.target?.dataset.constPos;
    if (charData === 1) {
      ctx.setSelected?.(true);

      renderContentHandler(charConstPos);
    }

    if (charData === 0) {
      direc = 1;
      setChars(direc);
      ctx.setSelected?.(true);
      renderContentHandler(charConstPos);
    }
    if (charData === 2) {
      direc = -1;
      setChars(direc);
      ctx.setSelected?.(true);
      renderContentHandler(charConstPos);
    }
    //disable selected if background is clicked
    if (e.target === charactersRef.current) {
      if (ctx.setSelected) ctx.setSelected(false);
      renderContentHandler(0);
    }
  };

  // *****************************************************
  //TODO handle swipe gestures

  // *****************************************************
  let leftIsSelected = leftChar === 1 && ctx.isSelected;
  let frontIsSelected = frontChar === 1 && ctx.isSelected;
  let rightIsSelected = rightChar === 1 && ctx.isSelected;

  const isAnythingSelected = () => {
    if (leftIsSelected) {
      return { isSelected: true, text: "Create character", moveTo: "creator" };
    }
    if (frontIsSelected) {
      return { isSelected: true, text: "Level me up", moveTo: "about-me" };
    }
    if (rightIsSelected) {
      return {
        isSelected: true,
        text: "Character Locked",
        greyedOut: true,
        moveTo: "hero",
      };
    } else return { isSelected: false };
  };

  const frontCharButtonHandler = (
    event: { currentTarget: Element },
    id: string | undefined
  ) => {
    ctx.setSelected?.(true);
    setTimeout(() => {
      if (!id) {
        id = "hero";
      }
      const element = document.querySelector(`#${id}`);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div ref={charactersColRef} className={classes["character-col"]}>
      <div
        className={`${classes["character__overlay"]} ${
          ctx.ctaButtonClicked?.clicked
            ? classes["character__overlay--hidden"]
            : ""
        }`}
      >
        {/* <div className={classes.cta}>
          <ButtonPrimary
            isAbsolute={false}
            onClick={ctaButtonHandler}
            text="Continue"
          ></ButtonPrimary>
          <div className={`${classes["cta__text"]}`}>
            <Typewriter
              options={{
                loop: true,
                delay: 100,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Create")
                  .pauseFor(4000)
                  .deleteAll()
                  .typeString("Level Up")
                  .pauseFor(4000)
                  .deleteAll()
                  .start();
              }}
            />
            <span className={classes["your-dev"]}>your Dev</span>
          </div>
        </div> */}
      </div>

      <div
        ref={charactersRef}
        onClick={ctx.rotateCharactersHandler}
        className={`${classes.characters} ${
          !ctx.ctaButtonClicked?.clicked ? classes.hidden : ""
        }`}
      >
        {isAnythingSelected().isSelected ? (
          <ButtonPrimary
            id={ctx.whichIsSelected === 1 ? "tourButton" : ""}
            onClick={(e) => {
              // tour?.complete();

              return frontCharButtonHandler(e, isAnythingSelected().moveTo);
            }}
            moveTo={isAnythingSelected().moveTo}
            isAbsolute={true}
            text={isAnythingSelected().text}
            isGreyedOut={isAnythingSelected().greyedOut}
          ></ButtonPrimary>
        ) : (
          ""
        )}
        <Character
          dataConstPos={CONST_POS[0]}
          data={leftChar}
          selected={leftIsSelected}
          selectedCtx={ctx.isSelected}
          name="Character Creator"
          onRotateCharacters={ctx.rotateCharactersHandler}
        ></Character>

        <Character
          dataConstPos={CONST_POS[1]}
          data={frontChar}
          selected={frontIsSelected}
          selectedCtx={ctx.isSelected}
          name="Damian"
          id="tourStart"
          onRotateCharacters={() => {
            // tour?.next();
            return ctx.rotateCharactersHandler;
          }}
        ></Character>
        {/* 
        <Character
          dataConstPos={CONST_POS[2]}
          selected={rightIsSelected}
          selectedCtx={ctx.isSelected}
          data={rightChar}
          name="Future Damian"
          onRotateCharacters={ctx.rotateCharactersHandler}
        ></Character> */}
      </div>
    </div>
  );
};

export default Characters;
