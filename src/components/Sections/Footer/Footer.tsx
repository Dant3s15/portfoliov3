import classes from './Footer.module.scss';
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>LOGO</div>
      <div>Github</div>
      <div>LinkedIn</div>
      <div>email</div>

      <div>© 2022 Damian Sobieraj. All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
