import React, { useState } from 'react';
import styles from '../styles/ApplicationForm.module.css'

const ApplicationForm = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email)
  }

  return (
    <form className={styles.application_form} onSubmit={handleSubmit}>
        <h2 className={styles.application_form_title}>Application Form</h2>
      <div className={styles.application_form_body}>
        <div className={styles.application_form_body_basics}>
          <label>First Name
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>Email
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <input id={styles["button"]} type="submit" />
        </div>
      </div>
    </form>
  );
};
export default ApplicationForm;