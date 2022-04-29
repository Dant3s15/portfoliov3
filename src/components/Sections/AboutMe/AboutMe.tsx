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
                  // deleteSpeed: 200,
                  cursor: '_',
                  wrapperClassName: classes.title,
                  cursorClassName: classes['title__cursor'],
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
                    delay: 60,
                    cursor: '',
                    // cursorClassName: classes['text__cursor'],
                  }}
                  onInit={typewriter => {
                    typewriter
                      .pauseFor(2000)
                      .typeString(
                        "<span>Hey, I'm Damian, your Frontend Developer from Poland 😊</span>"
                      )
                      .pauseFor(2000)
                      .typeString(
                        '<span>I can help you build your dream project 😉</span>'
                      )
                      .pauseFor(2000)
                      .typeString(
                        '<span>You can contact me by sending me an email📧 using the form below:</span>'
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
