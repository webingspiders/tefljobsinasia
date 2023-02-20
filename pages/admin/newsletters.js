import styles from '../../styles/Dashboard.module.css'
import Container from '../../widgets/Container'
import Image from 'next/image'
import FooterLogo from '../../public/TEFL JOBS in Asia Footer Logo.svg'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { HiOutlineLogout } from 'react-icons/hi'
import { motion } from 'framer-motion'
import Loader from '../../widgets/Loader'
import Link from 'next/link'

export default function Newsletters() {

  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState({})
  const [newsletters, setNewsletters] = useState([])
  const router = useRouter()
  useEffect(() => {
    fetchData()
  },[])

  axios.defaults.withCredentials = true;

  const fetchData = async() => {
    try{
    let {data} = await axios.get(`http://localhost:4000/api/v1/admin/me`, {
      withCredentials: true
    });
    setUserData(data.user)
    setLoading(false)
  }catch(err){
    router.push('/admin')
  }

    let newsletterData = await axios.get('http://localhost:4000/api/v1/newsletters')
    setNewsletters(newsletterData.data.subscribers)
    
  }

  const handleLogout = async() => {
    const {data} = await axios.post('http://localhost:4000/api/v1/admin/logout', { withCredentials: true })
    
    if(data.success){
      setLoading(true)
      sessionStorage.setItem('loggedin', false)
      router.push('/admin')
    }
  }


  return (
    <>
    {loading && <Loader />}
    <Container main_class={styles.dashboard_main} container_class={styles.dashboard} align="row">
      <aside className={styles.sidebar}>
        <a href="/" className={styles.logo}>
                <Image className={styles.logo_img} src={FooterLogo}/>
        </a>
        <nav className={styles.admin_nav}>
          <Link href="/admin/dashboard">Dashboard</Link>
          <Link href="/admin/applications">Applications</Link>
          <Link href="/admin/newsletters">Newsletters</Link>
        </nav>
        <motion.button
                 whileHover={{ scale: 1.2 }}
                 whileTap={{ scale: 0.8 }}
                className={styles.dashboard_logout} onClick={handleLogout} type="button">Logout <HiOutlineLogout /></motion.button>
      </aside>
      <div className={styles.admin_area}>
        <h1>Applications Submitted</h1>
        <div className={styles.applications_data}>
            <table id={styles["applicants"]}>
                <tbody>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message (if any) </th>
                </tr>
                {newsletters.map((applicant, key) => {
                    return(
                        <tr key={key}>
                            <td>{applicant.name}</td>
                            <td>{applicant.email}</td>
                            <td>{applicant.message}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
      </div>
    </Container>
    </>
  )
}
