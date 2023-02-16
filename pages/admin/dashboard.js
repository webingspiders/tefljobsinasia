import Header from '../../widgets/Header'
import styles from '../../styles/Dashboard.module.css'
import Footer from '../../widgets/Footer'
import Container from '../../widgets/Container'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { HiOutlineLogout } from 'react-icons/hi'
import { motion } from 'framer-motion'
import Loader from '../../widgets/Loader'

export default function Dashboard() {

  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState({})
  const router = useRouter()
  useEffect(() => {
    fetchData()
  },[])

  axios.defaults.withCredentials = true;

  const fetchData = async() => {
    const {data} = await axios.get(`api/v1/admin/me`, {
      withCredentials: true
    });
    setUserData(data.user)
    setLoading(false)
  }

  const handleLogout = async() => {
    const {data} = await axios.post('api/v1/admin/logout', { withCredentials: true })
    
    if(data.success){
      setLoading(true)
      sessionStorage.setItem('loggedin', false)
      router.push('/admin')
    }
  }


  return (
    <>
    {loading && <Loader />}
    <Header/>
    <Container container_class={styles.dashboard}>
        <h1>Welcome {userData.name} !</h1>
        <motion.button
                 whileHover={{ scale: 1.2 }}
                 whileTap={{ scale: 0.8 }}
                className={styles.dashboard_logout} onClick={handleLogout} type="button"><HiOutlineLogout /></motion.button>
    </Container>

    <Footer/>
    </>
  )
}
