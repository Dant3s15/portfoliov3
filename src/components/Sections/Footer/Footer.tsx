import github from '../../../resources/icons/logo-github.svg';
import linkedin from '../../../resources/icons/icon-linkedin-dark.svg';
import classes from './Footer.module.scss';
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <img src='' alt='Logo' />
        </div>
        <div className={classes.col}>
          <p className={classes.title}>Links:</p>
          <div className={classes['links-list']}>
            <div className={classes.link}>
              <img src={github} alt='github' />
              <a href='https://github.com/Dant3s15'>Github</a>
            </div>
            <div className={classes.link}>
              <img src={linkedin} alt='linkedin' />
              <a href='#'>LinkedIn</a>
            </div>
          </div>
        </div>
        <div className={classes.col}>
          <p className={classes.title}>Contact:</p>
          <div>
            <a href='mailto:damiansobierajdev@gmail.com'>
              damiansobierajdev@gmail.com
            </a>
            {/* <p>phone</p> */}
          </div>
        </div>
      </div>

      <div className={classes.copyright}>
        © 2022 Damian Sobieraj. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
