import github from '../../../resources/icons/logo-github.svg';
import linkedin from '../../../resources/icons/icon-linkedin-dark.svg';
import logo from '../../../resources/logo.svg';
import classes from './Footer.module.scss';
const Footer = () => {
  const testFetch = () => {
    async function getSkill() {
      const response = await fetch(
        'https://web-dev-skills-api.herokuapp.com/v1/skills'
      );
      const data = await response.json();
      console.log(data);
    }
    getSkill();
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div onClick={testFetch} className={`${classes.col} ${classes.logo}`}>
          <img src={logo} alt='Logo' />
        </div>
        <div className={`${classes.col} ${classes.links}`}>
          <p className={classes.title}>Links:</p>
          <div className={classes['links-list']}>
            <div className={classes.link}>
              <img src={github} alt='github' />
              <a target='_blank' href='https://github.com/DevmianS'>
                Github
              </a>
            </div>
            <div className={classes.link}>
              <img src={linkedin} alt='linkedin' />
              <a target='_blank' href='#'>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className={`${classes.col} ${classes.contact}`}>
          <p className={classes.title}>Contact:</p>
          <div>
            <a href='mailto:damiansobierajdev@gmail.com'>
              damiansobierajdev@gmail.com
            </a>
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
