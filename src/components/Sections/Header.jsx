import classes from './Header.module.scss';

const Header = props => {
  return (
    <header className={classes.header}>
      <div
        className={`${classes['header-wrapper']} ${classes['card-glass']} ${classes['hamburger-not-active']}`}
      >
        <div className={classes.navigation}>
          <div className={classes['logo-item']}>
            <a className={classes.logo} href='#'>
              <img src='src/resources/logo.svg' alt='' />
            </a>
          </div>
          <nav className={classes.nav}>
            <a href='#' className={classes.nav__item}>
              SECTION1
            </a>
            <a href='#' className={classes.nav__item}>
              SECTION2
            </a>
            <a href='#' className={classes.nav__item}>
              SECTION3
            </a>
            <a href='#' className={classes.nav__item}>
              SECTION4
            </a>
          </nav>
          <button className={classes['hamburger-button']}>
            <ion-icon
              className={classes['hamburger-icon']}
              name='menu-outline'
            ></ion-icon>
            <ion-icon
              className={`${classes['close-icon']} ${classes['hidden-btn']}`}
              name='close-outline'
            ></ion-icon>
          </button>
        </div>
        <nav className={classes['nav-mobile']}>
          <a href='#' className={classes['nav__item']}>
            SECTION1
          </a>
          <a href='#' className={classes['nav__item']}>
            SECTION2
          </a>
          <a href='#' className={classes['nav__item']}>
            SECTION3
          </a>
          <a href='#' className={classes['nav__item']}>
            SECTION4
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
