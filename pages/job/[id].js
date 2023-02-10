import Head from 'next/head'
import Image from 'next/image'
import Header from '../../widgets/Header'
import styles from '../../styles/Job.module.css'
import FTL from '../../public/About Fun to Learn English.svg'
import Footer from '../../widgets/Footer'
import Container from '../../widgets/Container'
import Button from '../../widgets/Button'
import ftl from '../../public/Fun to Learn English.svg'
import teaching from '../../public/Job Preview.svg'
import { FaBriefcase } from 'react-icons/fa'

export default function Job() {
  return (
    <>
      <Head>
        <title>TEFL Jobs in Asia for Native English Speakers</title>
        <meta name="description" content="TEFL Jobs in Asia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container main_class={styles.jobPreview} container_class={styles.jobPreview_container}>
          <div className={styles.jobPreviewDesc}>
            <h1><FaBriefcase />&nbsp;&nbsp;&nbsp;TEFL / ESL Certified Teacher</h1>
            <p>Fun To Learn English</p>
            <p>Sheung Shui, Hong Kong</p>
            <Image src={ftl} />
          </div>
          <Image src={teaching} className={styles.teaching} />
      </Container>
      
      <Container align="row" main_class={styles.company_overview}>
        <div className={styles.company}>
            <h2>About Fun to Learn English</h2>
            <p>We are looking to recruit English Teachers who have a solid foundation in the fundamentals of English, who are passionate and driven, and who have a desire to educate the future generation.</p>
        </div>
        <Image src={FTL}/>
      </Container>

      <Container align="row" main_class={styles.company_overview}>
        <div className={styles.job}>
            <h2>Job Description</h2>
            <p>Fun To Learn English is a dynamic English Language Learning Centre in Hong Kong for children, based in Sheung Shui and Fanling. With their highly qualified and dedicated teachers, well-designed curriculum as well as a wide range of courses to suit every child's needs. They ensure that the students learn English in a more engaging, fun, and dynamic environment and are able to retain the knowledge completely.</p>
            <h3>About Classes</h3>
            <ul>
              <li>We teach Kindergarten and Primary students English from age 3 to 11.</li>
              <li>We teach in small groups.</li>
              <li>We create a fun and motivating learning atmosphere for students.</li>
              <li>Work from Tuesdays to Saturdays.</li>
              <li>Tuesdays 1:00pm – 7:30pm.</li>
              <li>Wednesdays to Fridays 10:00 am – 7:30 pm.</li>
              <li>Saturdays 10:00am – 6:30pm.</li>
              <li>Less than 39 h / week working hours for a Full-Time Position.</li>
            </ul>
            <h3>Requirements</h3>
            <ul>
              <li>Must be punctual</li>
              <li>Passionate about teaching</li>
              <li>Creative, patient, fun with kids</li>
              <li>A team player</li>
              <li>University Degree, with TESOL, CELTA, or TEFL</li>
              <li>Relevant experience in teaching would be a great advantage</li>
              <li>Clear Criminal Record! (Domestic and International)</li>
              <li>A valid Passport</li>
            </ul>
        </div>
      </Container>

      <Container main_class={styles.cta} container_class={styles.cta_container}>
          <h2>Ready to Embark on a New Journey</h2>
          <div className={styles.cta_body}>
            <div className={styles.native}>
              <h3>For Native Speakers</h3>
              <p>View</p>
            </div>
            <div className={styles.native}>
            <h3>For Non-native Speakers</h3>
              <p>View</p>
            </div>
          </div>
        </Container>

      <Footer />
    </>
  )
}
