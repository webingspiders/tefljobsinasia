import React, { useState } from 'react';
import styles from '../styles/Loader.module.css'

const Loader = ({ title, content, color }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.loader_wrapper}>
      <h1>Please wait while we load the page.</h1>
      <div className={styles.loader}></div>
    </div>
  );
};
export default Loader;