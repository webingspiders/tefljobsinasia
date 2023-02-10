import styles from '../styles/TestimonialSlider.module.css'
import Container from './Container'
import Slider from 'react-slick/lib/slider'

export default function TestimonialSlider(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
    
    return(
        <Container main_class={styles.stories_main} container_class={styles.stories}>
        <h2>What the Teachers feel about Hong Kong</h2>
        <div className={styles.slider_area}>
          <Slider {...settings}>
          <div className={styles.success_stories}>
            <p>“ I fell in love with the city, its architecture and history, and I was so happy I got to spend time there. I'm so thankful for the opportunity to have lived and worked in Hong Kong. It was an experience I'll never forget."</p>
            <span>~ Megan D.</span>
          </div>

          <div className={styles.success_stories}>
            <p>“ For the most part, life in Hong Kong is an incredibly rich and rewarding experience. The city never fails to offer something new and exciting, and the level of convenience and efficiency you experience here is like no other! However, it can also be quite a challenging place to live in due to the crowded streets, high cost of living, and complex cultural and language barriers. That said, learning more about the city through interacting with locals, exploring the various sites and attractions, and immersing yourself in local culture can truly be a rewarding journey. The unique energy of the city, and the incredible people you will meet here make it a great place to call home!”</p>
            <span>~ Anabelle W.</span>
          </div>

          <div className={styles.success_stories}>
            <p>“ I had an amazing experience living and teaching in Hong Kong. The students were truly engaged and wanted to learn. They were motivated and really dedicated to learning English and improving their skills. The fact that their English was so high-level even at such a young age was really impressive. The school staff, administration and parents were warm and welcoming and made the experience even more enjoyable. The technology available was fantastic and the resources provided were plentiful. I was also able to visit some of the most beautiful places in Asia while living in Hong Kong and expand my network of international friends. All in all, Hong Kong is an amazing and unforgettable place to live and teach.”</p>
            <span>~ Joe C.</span>
          </div>
          </Slider>
        </div>
      </Container>
    )
}