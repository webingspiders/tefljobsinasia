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

export default function Applications() {

  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState({})
  const [applicants, setApplicants] = useState([])
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

    let applicantData = await axios.get('http://localhost:4000/api/v1/applications')
    setApplicants(applicantData.data.applicants)
    console.log(applicants)
    
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
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Experience</th>
                <th>Country</th>
                <th>Qualifications</th>
                <th>CV / Video CV</th>
                <th>Native / Non-native</th>
                <th>More info</th>
                </tr>
                {applicants.map((applicant, key) => {
                    return(
                        <tr key={key}>
                            <td>{applicant.firstName}</td>
                            <td>{applicant.middleName}</td>
                            <td>{applicant.lastName}</td>
                            <td>{applicant.email}</td>
                            <td>{applicant.phoneNo}</td>
                            <td>{applicant.experience}</td>
                            <td>{applicant.country}</td>
                            <td>{applicant.qualification}</td>
                            <td> 
                                {applicant.cv && <Link href={`/${applicant.cv}`}>Download CV</Link>}<br/>
                                {applicant.videoCv && <Link href={`/${applicant.videoCv}`}>Download Video</Link>}
                            </td>
                            <td>{applicant.native}</td>
                            <td>{applicant.dateOfBirth}<br/> {applicant.addressline1} {applicant.addressline2}</td>
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
