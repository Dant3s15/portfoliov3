import { Fragment } from 'react';
import Character from '../Hero/Characters/Character';
import CardGlass from '../../UI/CardGlass';
import ContactForm from '../ContactForm/ContactForm';
import Projects from '../Projects/Projects';
import ButtonBig from '../../UI/ButtonBig';
import classes from './AboutMe.module.scss';
const AboutMe = () => {
  return (
    <Fragment>
      <div id='about-me' className={classes['about-me']}>
        <div className={classes['about-me-char']}>
          <ButtonBig
            isAbsolute={true}
            style={{ top: '80%' }}
            text='Contact Me'
            moveTo='contact-me'
          ></ButtonBig>
          <div className={`${classes['char__container']} cancel-absolute`}>
            <Character
              onRotateCharacters={() => {
                return;
              }}
              data={3}
              name='Front'
            ></Character>
          </div>
        </div>
        <div className={classes['about-me-text']}>
          <div className={`${classes['text-container']}`}>
            <CardGlass>
              <div className={classes['text-wrapper']}>
                <h2 className={classes.title}>About Me</h2>
                <p className={classes.text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  provident quae assumenda consequatur rem minus animi,
                  voluptatem, quisquam nihil fugiat ea dignissimos, similique
                  eum porro atque. Vitae est delectus numquam fugiat quidem. Ab,
                  culpa reiciendis dolorum obcaecati laudantium excepturi
                  cupiditate?
                </p>
              </div>
            </CardGlass>
          </div>
        </div>
      </div>
      <Projects></Projects>
      <ContactForm></ContactForm>
    </Fragment>
  );
};

export default AboutMe;
