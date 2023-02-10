import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Accordion from '../widgets/Accordion'
import Header from '../widgets/Header'
import styles from '../styles/Home.module.css'
import hero from '../public/Hero Image TEFL.svg'
import ftl from '../public/Fun to Learn English.svg'
import hongkong from '../public/whychoosehk.svg'
import teaching from '../public/English Teaching.svg'
import education from '../public/For Education Institutes.svg'
import about from '../public/Aboutus.svg'
import Footer from '../widgets/Footer'
import Container from '../widgets/Container'
import Button from '../widgets/Button'
import Slider from 'react-slick'
import CTA from '../widgets/CTA'
import native from '../public/For Native speakers.svg'
import nonNative from '../public/Hero Image for NonNative.svg'
import TestimonialSlider from '../widgets/TestimonialSlider'

export default function Home() {

  const faqData = [
    {
      title: 'What is TEFL?',
      content: `The full form of TEFL is teaching English as a foreign language. A TEFL Certificate is a globally recognized professional credential that certifies that its holder is eligible for teaching English as a foreign language. A TEFL certificate enables an individual to teach English to non-native speakers abroad or online.`
    },
    {
      title: 'Are there any age restrictions for teaching English in Hong Kong?',
      content: `Generally speaking there is no age limit to teaching english abroad as long as you’re over 21 year old. You can teach English abroad in your forties, fifties and beyond.Even though a lot of these teach english abroad programs might target people who recently graduated, older adults can use their maturity and experience to secure jobs.`
    },
    {
      title: 'How much does it cost to teach English abroad?',
      content: `There are in general three main costs that you’ll need to budget for if you’re planning to teach english abroad. First is for having a TEFL qualification, second, the transportation and pre departure costs and lastly the living expenses for the first few days after arriving in your destination.`
    },
    {
      title: 'How to get a visa for Hong Kong?',
      content: `To legally work in Hong Kong as an English teacher, you’ll need to apply for a z visa. The minimal qualification needed is to have a bachelor’s degree in any subject and a tefl certificate.`
    }
  ];

  const whyTeachData = [
    {
      title: 'Developed economy with very low crime rates.',
      content: `It has a long history of embracing expats and foreign workers as part of its rich cultural heritage. Low crime rates make Hong Kong one of the best places to settle down.`
    },
    {
      title: 'Excellent public transportation and reasonably cheap.',
      content: `The subway system can take you almost everywhere you may need to travel to, in good, clean and modern conditions, while it's true that it can be overcrowded during peak hours, mainly on Hong Kong Island and Kowloon side. The bus network, as trams and minibuses, links places within this city easily, making public transportation a pleasant necessity.`
    },
    {
      title: 'Excellent Health Care system.',
      content: `Yes, as long as you obtain your ID card, that means that you are working here legally, and you, by default, 'll be covered by the Health Care System, which is pretty impressive.`
    }
  ]

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  return (
    <>
      <Head>
        <title>TEFL Jobs in Asia</title>
        <meta name="description" content="TEFL Jobs in Asia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container main_class={styles.hero}>
          <h1>Start Your Teaching in Hong Kong</h1>
          <p>We bring to you the latest in-demand TEFL jobs available in Hong Kong.</p>
          <div className={styles.hero_action}>
            <Button><Link href="/native">Apply For Native Jobs</Link></Button>
            <Button><Link href="/non-native">Apply For Non-native Jobs</Link></Button>
          </div>
          <div className={styles.hero_img}>
            <Image src={hero} layout='fill' />
          </div>
      </Container>

      <Container main_class={styles.whychoosehk} container_class={styles.whychoosehk_container}>
          <h2>Why Teach in Hong Kong?</h2>
          <p>Almost over 100 native english speakers are working as teachers in Hong Kong</p>
          <div className={styles.whychoosehk_area}>
            <div className={styles.whychoosehk_img}>
              <Image src={hongkong} layout='fill'/>
            </div>
            <div className={styles.whychoosehk_content_area}>
              <div className={styles.whyTeach}>
          {whyTeachData.map(({ title, content}) => (
            <Accordion title={title} content={content} color='#62559A' />
          ))}
        </div>
            </div>
          </div>
      </Container>
      
      {/* <Container main_class={styles.collaboration}>
          <h2>Schools we're currently collaborating with...</h2>
          <p>We find the best suited qualified English teacher for your Institute and vice versa.</p>
          <div className={styles.school_list_slider}>
            <div className={styles.school_list_slider_area}>
              <div className={styles.school_list}>
                <div className={styles.school_list_content}>
                  <Image src={teaching} className={styles.teaching} />
                  <Image src={ftl} />
                  <h3>English Teacher</h3>
                  <p>Fun to Learn English Learning Centre</p>
                </div>
                <Button><Link href="/job/fun-to-learn-english">View Job</Link></Button>
              </div>
            </div>
          </div>
      </Container> */}

      <Container align="row" main_class={styles.aboutus}>
        <h2>In TEFL Jobs in Asia...</h2>
        <div className={styles.aboutus_container}>
          <div className={styles.content_slider}>
            {/* <Slider {...settings}> */}
              <div className={styles.content_slide}>
                <p>We aim to find the right fit for both the institutes and the teachers as we think this is the only way for students to enjoy learning.</p>
                <p>And if you possess that passion for teaching and the determination to share that knowledge, then you’re on the right page.</p>
              </div>
              {/* <div className={styles.content_slide}>
                
              </div> */}
            {/* </Slider> */}
          </div>
          <div className={styles.aboutus_img}>
            <Image src={about} layout="fill" />
          </div>
        </div>
      </Container>

      <Container align="row" main_class={styles.educationInst}>
        <div className={styles.forInstitutions}>
          <h2>Looking for Qualified English teachers for your Institute?</h2>
          <p id={styles.filler}>We help you find the best suited teacher for your Institute!</p>
          <p>We have been interviewing and recruiting English teachers suitable for Hong Kong’s educational system since 2015. In TEFL Jobs In Asia, our main goal is that every candidate will be placed in the most appropriate institution according to both parties’ needs and requirements.</p>
          <Button><Link href="/contact">Start Hiring Now</Link></Button>
        </div>
        <div className={styles.educationInst_image}>
          <Image src={education} layout="fill" />
        </div>
      </Container>

      <CTA />

      <TestimonialSlider />

      <Container main_class={styles.faq}>
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className={styles.accordion}>
          {faqData.map(({ title, content }) => (
            <Accordion title={title} content={content} color='#DAAA9E' />
          ))}
        </div>
      </Container>

      <Container main_class={styles.cta} container_class={styles.cta_container}>
          <h2>Apply now to find your perfect dream job</h2>
          <p>Whether you’re a native or non native English speaker, we've got opportunities for you. <br/><br/>Click below to explore more about the requirements.</p>
          <div className={styles.cta_body}>
            <Link href="/native">
              <div className={styles.native}>
                <h3>Apply Here for Native Speakers</h3>
                <Image src={native} className={styles.teaching} layout="fill" />
              </div>
            </Link>

            <Link href="/non-native">
              <div className={styles.native}>
              <h3>Apply Here for Non-native Speakers</h3>
              <Image src={nonNative} className={styles.teaching} layout="fill" />
              </div>
            </Link>
          </div>
        </Container>

      <Footer />
    </>
  )
}
