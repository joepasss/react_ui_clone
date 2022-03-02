import styles from './SecondaryNaviagion.module.css';

import Search from '../Search';
import Notification from '../Notification';
import UserMenu from '../UserMenu';
import BillboardSettings from '../BillboardSettings';

function SecondaryNaviagion() {
  return (
    <div className={styles.box}>
      <div className={styles.navItem}>
        <Search />
      </div>
      <div className={styles.navItem}>
        <Notification />
      </div>
      <div className={styles.navItem}>
        <UserMenu />
      </div>
      <div className={styles.navItem}>
        <BillboardSettings />
      </div>
    </div>
  );
}

export default SecondaryNaviagion;
