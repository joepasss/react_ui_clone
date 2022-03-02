import React from 'react';

import NotificationIcon from './NotificationIcon';

import styles from './Notification.module.css';

function Notification() {
  return (
    <div className={styles.notification}>
      <NotificationIcon />
    </div>
  );
}

export default Notification;
