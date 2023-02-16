import styles from '../styles/CTA.module.css';
import Container from './Container';
import Signup from '../public/Sign Up.svg'
import Image from 'next/image'
import Button from './Button';
import { useState } from 'react';
import axios from 'axios';

const CTA = (props) => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const newsletterSignup = async() => {
    const {data} = await axios.post('api/v1/newsletter/register', {
      name, email
    })
    data.success && setResponse('Thank you for subscribing to our newsletter!')
  }

  return (
    <Container align="row" main_class={styles.signup_main} >
        <div className={styles.signup_content}>
          <h2>Sign up to stay updated on newer opportunities</h2>
          <p>Join our community and get notified for our upcoming job posts and vacancies!</p>
          <div className={styles.signup_action}>
            <div className={styles.user_input}>
              <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" name="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <Button click={newsletterSignup}>Sign up</Button>
          </div>
          <span>{response}</span>
        </div>
        <div className={styles.signup_img}>
          <Image src={Signup} layout="responsive"/>
        </div>
    </Container>
  );
};
export default CTA;
