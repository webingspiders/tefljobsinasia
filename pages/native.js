import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../widgets/Header'
import styles from '../styles/Native.module.css'
import hero from '../public/Requirements for Native Speakers.svg'
import NonNativeCTA from '../public/Non-native Spearker Opportunity.svg'
import buildings from '../public/Did You Know HK Buildings.svg'
import clouds from '../public/Did You Know HK Clouds.svg'
import Signup from '../public/Sign Up.svg'
import native from '../public/For Native speakers.svg'
import Footer from '../widgets/Footer'
import Container from '../widgets/Container'
import Button from '../widgets/Button'
import Modal from '../widgets/Modal'
import CTA from '../widgets/CTA'
import { useRef } from 'react'
import TestimonialSlider from '../widgets/TestimonialSlider'
import HeadTag from '../widgets/HeadTag'

export default function Native() {

  const requirementsRef = useRef(null);

  const jumpToRequirements = () => {
    requirementsRef.current.scrollIntoView()
  }

  return (
    <>
    <HeadTag title="Teaching Jobs for Native English Speakers" desc="In TEFL Jobs In Asia we’ve hand picked some exciting job opportunities. The qualifications needed to apply for the job is based on the different recruiting demands. Check below to see the requirements and verify your potential." />

      <Header />

      <Container 
        container_class={styles.native_container}
        align="row">
          <div className={styles.native_img}>
            <Image src={native} layout="responsive" />
          </div>
          <div className={styles.native_hero}>
            <h1>TEFL Jobs for Native English Speakers</h1>
            <p>If English is your first language, then you’re in the right place!</p>
            <p>In TEFL Jobs In Asia we’ve hand picked some exciting job opportunities. The qualifications needed to apply for the job is based on the different recruiting demands. Check below to see the requirements and verify your potential.</p>
            <Button click={jumpToRequirements}>See Requirements</Button>
          </div>
      </Container>
      
      <Container align="row" main_class={styles.requirements}>
        <div ref={requirementsRef} className={styles.requirements_content}>
            <h2>Requirements</h2>
            <p>You’ll need to have your Visa as a Native English Speaker.</p>
            <ul>
              <li>High School Diploma/Any Bachelor Degree + TEFL/TESOL/CELTA.</li>
              <li>High School Diploma/Any Bachelor Degree + Relevant experience.</li>
              <li>High School Diploma/Any Bachelor Degree + TEFL/TESOL/CELTA + Relevant experience.</li>
              <li>Bachelor of Education + TEFL/TESOL/CELTA + Relevant experience (Ideal Requirements).</li>
            </ul>
            <p id={styles["statement"]}>If you meet any the four above requirements you can click the below button and submit your CV by filling up out our Admission Form.</p>
            <Modal text="Apply Now"/>
        </div>
        <div className={styles.requirements_img}>
          <Image src={hero} layout="responsive" />
        </div>
      </Container>

      {/* <Container align="row" main_class={styles.apply_main} >
        <Image src={Apply} className={styles.apply_img} />
        <div className={styles.apply_content}>
          <h2>Apply now with your CV to get a callback</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button>Apply Now</Button>
        </div>
      </Container> */}

      <TestimonialSlider />

      <CTA />

      <Container align="row" main_class={styles.educationInst}>
        <div className={styles.forInstitutions}>
          <h2>Are you a Non-Native speaker looking for Teaching jobs in Hong Kong?</h2>
          <p id={styles.filler}>Is English your second language and you’re looking for opportunities to build your career over it?</p>
          <p>Then you’re in the right place. We help teaching institutes find their best suited teacher and vice versa. Apply now and take another step toward your dream job.</p>
          <Button><Link href="/non-native">Check It Out</Link></Button>
        </div>
        <div className={styles.cta_img}>
          <Image src={NonNativeCTA} layout="responsive" />
        </div>
      </Container>

      <Container align="row" main_class={styles.didYouKnow} container_class={styles.didYouKnow_container}>
          <h2>DID YOU KNOW?</h2>
          <p>At present, there are approximately 800 NET teachers working in Hong Kong schools. What makes Hong Kong a suitable place for making a teaching career?</p>
        <div className={styles.didYouKnowInfo}>
          <p>First of all, Safety, Hong Kong is well known as one of the safest places to live. Accordingly to govisafree.com, Hong Kong is ranked 8th as the safest city.</p>
          <Image id={styles["buildings"]} src={buildings} />
          <Image id={styles["clouds"]} src={clouds} />
        </div>
      </Container>

      <Footer />
    </>
  )
}
