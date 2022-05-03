import github from '../../../resources/icons/logo-github.svg';
import linkedin from '../../../resources/icons/icon-linkedin-dark.svg';
import logo from '../../../resources/logo.svg';
import classes from './Footer.module.scss';
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={`${classes.col} ${classes.logo}`}>
          <img src={logo} alt='Logo' />
        </div>
        <div className={`${classes.col} ${classes.links}`}>
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
        <div className={`${classes.col} ${classes.contact}`}>
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
        <p>© 2022 Damian Sobieraj. </p>
        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
