import { Fragment } from 'react';
import Character from '../Hero/Characters/Character';
import CardGlass from '../../UI/CardGlass';
import ContactForm from '../ContactForm/ContactForm';
import ButtonBig from '../../UI/ButtonBig';
import classes from './AboutMe.module.scss';
const AboutMe = props => {
  // const receiveClass = cls => {
  //   receivedClass = cls;
  //   return cls;
  // };

  return (
    <Fragment>
      <div id='about-me' className={classes['about-me']}>
        <div className={classes['about-me-text']}>
          <CardGlass
            // onReceiveClass={receiveClass}
            className={`${classes['text-container']} card--glass`}
          >
            <h2 className={classes.title}>About Me</h2>
            <p className={classes.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              provident quae assumenda consequatur rem minus animi, voluptatem,
              quisquam nihil fugiat ea dignissimos, similique eum porro atque.
              Vitae est delectus numquam fugiat quidem. Ab, culpa reiciendis
              dolorum obcaecati laudantium excepturi cupiditate?
            </p>
          </CardGlass>
        </div>
        <div className={classes['about-me-char']}>
          <ButtonBig
            isAbsolute={{ isAbsolute: true }}
            style={{ top: '80%' }}
            text='Contact Me'
            moveTo='contact-me'
          ></ButtonBig>
          <div className={`${classes['char__container']} cancel-absolute`}>
            <Character
              onRotateCharacters={() => {
                return;
              }}
              data='1'
              name='Front'
            ></Character>
          </div>
        </div>
      </div>
      <ContactForm></ContactForm>
    </Fragment>
  );
};

export default AboutMe;
