import Header from '../widgets/Header'
import styles from '../styles/Contact.module.css'
import Footer from '../widgets/Footer'
import Container from '../widgets/Container'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import HeadTag from '../widgets/HeadTag'
import Loader from '../widgets/Loader'

export default function Admin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(sessionStorage.getItem('loggedin') == true){
        router.push('/admin/dashboard')
    }
    setLoading(false)
  })

  const handleContact = async(e) => {
    e.preventDefault();
    const {data} = await axios.post('https://tefljobsinasia.com/api/v1/admin/login', {
      email, password
    }, {withCredentials: true})
    if(data.success){
        router.push('/admin/dashboard')
        sessionStorage.setItem('loggedin', true);
    }
  }
  return (
    <>
    <HeadTag title="Login" />

    {loading && <Loader />}

    <Header/>
    <Container main_class={styles.contact_us}>
        <h1>Admin Login</h1>
        <p>Login below to access the Admin area</p>
        <form onSubmit={handleContact}>
            <label>
            Email Address
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
            Password
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <input id={styles["button"]} type="submit" value="Login" />
        </form>
    </Container>
    <Footer/>
    </>
  )
}
