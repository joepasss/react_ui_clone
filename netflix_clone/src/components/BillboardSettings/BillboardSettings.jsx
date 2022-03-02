import React from 'react';

import SettingsIcon from './SettingsIcon';

import styles from './BillboardSettings.module.css';

function BillboardSettings() {
  return (
    <div className={styles.billboardSettings}>
      <SettingsIcon />
    </div>
  );
}

export default BillboardSettings;
