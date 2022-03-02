import logo from './assets/logo.png';
import styles from './Navigation.module.css';

import SecondaryNaviagion from '../SecondaryNavigation/index';

function Navigation() {
  const navitems = ['Home', 'TV Shows', 'Movies', 'New&Popular', 'My List'];

  return (
    <div className={styles.navigation}>
      <div className={styles.mainNavigation}>
        <img className={styles.logo} src={logo} alt='logo' />
        <ul className={styles.navigationList}>
          {navitems.map((item) => (
            <li className={styles.navigationItem} key={item}>
              <a href='/'>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <SecondaryNaviagion />
    </div>
  );
}

export default Navigation;
