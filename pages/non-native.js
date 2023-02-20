import Image from 'next/image'
import Link from 'next/link'
import Header from '../widgets/Header'
import styles from '../styles/Native.module.css'
import hero from '../public/non-native-requirements.svg'
import NativeCTA from '../public/Job Opening for NonNatives.svg'
import buildings from '../public/Did You Know HK Buildings.svg'
import clouds from '../public/Did You Know HK Clouds.svg'
import nonNative from '../public/Hero Image for NonNative.svg'
import Footer from '../widgets/Footer'
import Container from '../widgets/Container'
import Button from '../widgets/Button'
import CTA from '../widgets/CTA'
import { useRef } from 'react'
import Modal from '../widgets/Modal'
import TestimonialSlider from '../widgets/TestimonialSlider'
import HeadTag from '../widgets/HeadTag'

export default function NonNative() {

  const requirementsRef = useRef(null);

  const jumpToRequirements = () => {
    requirementsRef.current.scrollIntoView()
  }

  return (
    <>
    <HeadTag title="Teaching Jobs for Non-native English speakers" desc="In TEFL Jobs In Asia we’ve hand picked some exciting job opportunities. The qualifications needed to apply for the job is based on the different recruiting demands. Check below to see the requirements and verify your potential." />

      <Header />

      <Container 
        container_class={styles.native_container}
        align="row">
          <div className={styles.native_img}>
            <Image src={nonNative} layout="responsive" />
          </div>
        <div className={styles.native_hero}>
            <h1>TEFL Jobs For Non-Native English Speakers</h1>
            <p>English is not your first language, but you have a passion for teaching?</p>
            <p>In TEFL Jobs In Asia we’ve hand picked some exciting job opportunities. The qualifications needed to apply for the job is based on the different recruiting demands. Check below to see the requirements and verify your potential.</p>
            <Button click={jumpToRequirements}>See Requirements</Button>
        </div>
      </Container>
      
      <Container align="row" main_class={styles.requirements}>
        <div ref={requirementsRef} className={styles.requirements_content}>
            <h2 style={{color: '#ffffff'}}>Requirements</h2>
            <p style={{color: '#ffffff'}}>You’ll need to have your Visa as a Non-native English Speaker.</p>
            <ul>
              <li style={{color: '#ffffff'}}>Any Bachelor Degree + TEFL/TESOL/CELTA + Relevant experience (Minimum requirement).</li>
              <li style={{color: '#ffffff'}}>Bachelor of Education + TEFL/TESOL/CELTA + Relevant experience (Ideal Requirements).</li>
            </ul>
            <p id={styles["statement"]}>If you meet any the four above requirements you can click the below button and submit your CV by filling up out our Admission Form.</p>
            <Modal text="Apply Now"/>
        </div>
        <div className={styles.requirements_img}>
          <Image src={hero} layout="responsive" />
        </div>
      </Container>

      <TestimonialSlider />

      <CTA />

      <Container align="row" main_class={styles.educationInst}>
        <div className={styles.forInstitutions}>
          <h2>Job Opening for Native English teacher in Hong Kong!</h2>
          <p id={styles.filler}>Do you have passion for teaching?</p>
          <p>Then you’re in the right place. We help you find the institute that is the your best match in Hong Kong.
Apply now and take another step toward your dream job.</p>
          <Button><Link href="/native">Check It Out</Link></Button>
        </div>
        <div className={styles.cta_img}>
          <Image src={NativeCTA} layout="responsive" />
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
