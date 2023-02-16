import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../widgets/Header'
import styles from '../styles/About.module.css'
import founders from '../public/Founders of TEFL Jobs in Asia.png'
import hongkong from '../public/Why live in Hong Kong.png'
import megan from '../public/Megan Testimonial.png'
import joe from '../public/Joe.png'
import anabelle from '../public/Anabelle.png'
import noah from '../public/Noah.png'
import Footer from '../widgets/Footer'
import Container from '../widgets/Container'
import Accordion from '../widgets/Accordion'
import native from '../public/For Native speakers.svg'
import nonNative from '../public/Hero Image for NonNative.svg'
import open from '../public/Comma Open.svg'
import close from '../public/Comma Close.svg'
import HeadTag from '../widgets/HeadTag'

export default function About() {

  const didYouKnowData = [
    {
      title: 'Hong Kong is rated as the 8th most safest place to live.',
      content: `At TEFL Jobs In Asia, we’re committed to connecting aspiring teachers with excellent opportunities, enabling them to experience all the joys and challenges related to teaching English in Asia. We understand that moving to another country can often involve a significant degree of preparation. That’s why we’ve made the job search process as easy as possible by offering a comprehensive range of jobs in the Asia Pacific region.`
    },
    {
      title: 'From beautiful clean beaches to stunning views from the top of the local "mountains".',
      content: `Explore the unbeaten paths that will bring you to the lush, green and full of wildlife jungle all over the place, just a few steps away from the other urban jungle. Enjoy the neat cycling tracks that will bring you to the rural and historical side of Hong Kong.`
    },
    {
      title: 'Vibrant Expat Community',
      content: `Nevertheless of what your background is, we're pretty sure that you will find people alike in our community.`
    }
  ];

  return (
    <>
      <HeadTag title="About TEFL Jobs in Asia" desc="At TEFL Jobs In Asia, we’re committed to connecting aspiring teachers with excellent opportunities, enabling them to experience all the joys and challenges related to teaching English in Asia.
We understand that moving to another country can often involve a significant degree of preparation." />

      <Header />

      <Container main_class={styles.hero}>
          <h1>About TEFL Jobs In Asia</h1>
          <p>At TEFL Jobs In Asia, we’re committed to connecting aspiring teachers with excellent opportunities, enabling them to experience all the joys and challenges related to teaching English in Asia.
We understand that moving to another country can often involve a significant degree of preparation. That’s why we’ve made the job search process as easy as possible by offering a comprehensive range of jobs in the Asia Pacific region.</p>
        <div className={styles.founders}>
            <div className={styles.founders_img}>
                <Image src={founders} layout="responsive" />
            </div>
            <div className={styles.founders_quotes}>
              <Image src={open} id={styles["open"]} />
              <p>We, the owners of TEFL Jobs In Asia, have been interviewing and recruiting English teachers suitable for Hong Kong’s educational system since 2015. Our main goal is that each candidate will be placed in the most appropriate institution accordingly to both parties’ needs and requirements.</p>
              <Image src={close} id={styles["close"]} />
            </div>
        </div>
      </Container>

      <Container align="row" main_class={styles.livinginHK}>
            <div className={styles.livinginHK_area}>
            <h2>DID YOU KNOW?</h2>
            <div className={styles.livinginHK_content_area}>
            {didYouKnowData.map(({ title, content}) => (
              <Accordion title={title} content={content} color='#62559A' />
            ))}
            </div>
            </div>
            <div className={styles.livinginHKimage}>
              <Image src={hongkong} layout="responsive"/>
            </div>
      </Container>

      <Container main_class={styles.testimonials}>
          <h2>Some careers we've built</h2>

          <div className={styles.testimonial_container}>
            <div className={styles.testimonial_picture}>
              <Image src={megan} layout="responsive" />
            </div>
            <div className={styles.testimonial_details}>
              <p>“I absolutely loved my experience teaching English in Hong Kong. The people were so friendly and welcoming, and I cherished my time spent living in the New Territories. The culture was fascinating and I never got tired of trying something new and learning more about the area. I fell in love with the city, its architecture and history, and I was so happy I got to spend time there. I'm so thankful for the opportunity to have lived and worked in Hong Kong. It was an experience I'll never forget."</p>
              <span>~ Megan D.</span>
            </div>
          </div>

          <div className={styles.testimonial_container}>
          <div className={styles.testimonial_details}>
              <p>“I was surprised and grateful at how welcomed I felt in Hong Kong. Despite being different in ethnicity, the locals made an effort to be friendly and inclusive. I felt like I could take part in the local events and observe local customs without any judgement or vibes of alienation. People went out of their way to make sure I felt comfortable in the city and even showed me some of the hidden gems I would have otherwise missed out on. Thank you Hong Kong!”</p>
              <span>~ Noah J.</span>
            </div>

            <div className={styles.testimonial_picture}>
              <Image src={noah} layout="responsive" />
            </div>
          </div>

          <div className={styles.testimonial_container}>
            <div className={styles.testimonial_picture}>
              <Image src={joe}  layout="responsive" />              
            </div>

            <div className={styles.testimonial_details}>
              <p>“I had an amazing experience living and teaching in Hong Kong. The students were truly engaged and wanted to learn. They were motivated and really dedicated to learning English and improving their skills. The fact that their English was so high-level even at such a young age was really impressive. The school staff, administration and parents were warm and welcoming and made the experience even more enjoyable. The technology available was fantastic and the resources provided were plentiful. I was also able to visit some of the most beautiful places in Asia while living in Hong Kong and expand my network of international friends. All in all, Hong Kong is an amazing and unforgettable place to live and teach.”</p>
              <span>~ Joe C.</span>
            </div>

          </div>

          <div className={styles.testimonial_container}>
            <div className={styles.testimonial_details}>
              <p>“For the most part, life in Hong Kong is an incredibly rich and rewarding experience. The city never fails to offer something new and exciting, and the level of convenience and efficiency you experience here is like no other! However, it can also be quite a challenging place to live in due to the crowded streets, high cost of living, and complex cultural and language barriers. That said, learning more about the city through interacting with locals, exploring the various sites and attractions, and immersing yourself in local culture can truly be a rewarding journey. The unique energy of the city, and the incredible people you will meet here make it a great place to call home!”</p>
              <span>~ Anabelle W.</span>
            </div>
            <div className={styles.testimonial_picture}>
              <Image src={anabelle} layout="responsive" />
            </div>
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
