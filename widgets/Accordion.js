import React, { useState } from 'react';
import styles from '../styles/Accordion.module.css'
import { RxCaretUp, RxCaretDown } from 'react-icons/rx';

const Accordion = ({ title, content, color }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordion_item} style={{ backgroundColor: color }}>
      <div className={styles.accordion_title} onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3>
        <span>{isActive ? <RxCaretUp/> : <RxCaretDown/>}</span>
      </div>
      <div className={`${styles.accordion_content} ${isActive && styles.open}`}>{content}</div>
    </div>
  );
};
export default Accordion;