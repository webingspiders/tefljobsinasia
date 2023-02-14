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
            <p>“ For the most part, life in Hong Kong is an incredibly rich and rewarding experience. The city never fails to offer something new and exciting, and the level of convenience and efficiency you experience here is like no other!”</p>
            <span>~ Anabelle W.</span>
          </div>

          <div className={styles.success_stories}>
            <p>“ I had an amazing experience living and teaching in Hong Kong. The students were truly engaged and wanted to learn. They were motivated and really dedicated to learning English and improving their skills.”</p>
            <span>~ Joe C.</span>
          </div>
          </Slider>
        </div>
      </Container>
    )
}