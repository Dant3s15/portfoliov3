import { Fragment } from 'react';
import Character from '../Hero/Characters/Character';
import CardGlass from '../../UI/CardGlass';
import ContactForm from '../ContactForm/ContactForm';
import Projects from '../Projects/Projects';
import ButtonBig from '../../UI/ButtonBig';
import Typewriter from 'typewriter-effect';
import classes from './AboutMe.module.scss';
const AboutMe = () => {
  return (
    <Fragment>
      <div id='about-me' className={classes['about-me']}>
        <div className={classes['about-me-char']}>
          <div className={`${classes['char__container']} cancel-absolute`}>
            <Character
              onRotateCharacters={() => {
                return;
              }}
              data={3}
              name='Damian'
            ></Character>
          </div>
        </div>

        <div className={classes['text-wrapper']}>
          <CardGlass className={classes['glass-card--custom']}>
            <div className={`${classes['text-container']} `}>
              <Typewriter
                options={{
                  delay: 200,
                  deleteSpeed: 200,
                  cursor: '',
                  wrapperClassName: classes.title,
                  // cursorClassName: classes.title,
                  loop: true,
                }}
                onInit={typewriter => {
                  typewriter
                    .typeString(`<h2>About Me</h2>`)
                    .pauseFor(4000)
                    .deleteAll()
                    .typeString(`<h2>Contact Me</h2>`)
                    .pauseFor(4000)
                    .deleteAll()
                    .start();
                }}
              />
              {/* <span className={classes.title}>Me</span> */}
              {/* <h2 className={classes.title}>About Me</h2> */}
              <div className={classes.text}>
                <Typewriter
                  options={{
                    delay: 40,
                    cursor: '_',
                  }}
                  onInit={typewriter => {
                    typewriter
                      .typeString(
                        `              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, atque nemo! Magni asperiores fugit voluptatem omnis, reprehenderit molestiae repellat quae officiis harum ab non. Quae voluptas voluptatem quod placeat sit!`
                      )
                      .start();
                  }}
                />
              </div>

              <ContactForm />
              {/* <ButtonBig
                  isAbsolute={true}
                  style={{ top: '80%' }}
                  text='Contact Me'
                  moveTo='contact-me'
                ></ButtonBig> */}
            </div>
          </CardGlass>
        </div>
      </div>
      <Projects />
    </Fragment>
  );
};

export default AboutMe;
