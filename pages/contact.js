import Header from '../widgets/Header'
import styles from '../styles/Contact.module.css'
import Footer from '../widgets/Footer'
import Container from '../widgets/Container'
import { useState } from 'react'
import axios from 'axios'

export default function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const handleContact = async() => {
    e.preventDefault();
    const {data} = await axios.post('api/v1/newsletter/register', {
      name, email, phone, message
    })
    data.success && setResponse('Thank you for subscribing to our newsletter!')
  }
  return (
    <>
    <Header/>
    <Container main_class={styles.contact_us}>
        <h1>Contact Us</h1>
        <p>Tell us your query here or send us a mail at <a style={{color: '#DAAA9E'}} href="mailto:contact@tefljobsinasia.com">contact@tefljobsinasia.com</a></p>
        <form onSubmit={handleContact}>
            <label>
            Name
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
            Email Address
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
            Phone Number
            <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </label>
            <label id={styles["message"]}>
            Message
            <textarea type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <input id={styles["button"]} type="submit" value="Send" />
        </form>
        <span>{response}</span>
    </Container>
    <Footer/>
    </>
  )
}
