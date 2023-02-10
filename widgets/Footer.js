import Image from 'next/image'
import Link from 'next/link'
import FooterLogo from '../public/TEFL JOBS in Asia Footer Logo.svg'
import styles from '../styles/Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return(
        <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_head}>
            <div className={styles.company_details}>
              <Image src={FooterLogo}/>
              <p>Matching English speakers with their Dream Job</p>
              <div className={styles.nat}>
                <p>TEFL Jobs in Asia</p>
                <p>Block B, Shop 7, 2/F, Lung Fung Garden, Lung Sum Ave, Sheung Shui, Hong Kong</p>
                <p>+852 5406 7892</p>
              </div>
            </div>
            <div className={styles.useful_links}>
              <ul className={styles.footer_nav_links}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/native">Native</Link></li>
                <li><Link href="/non-native">Non-Native</Link></li>
                {/* <li><Link href="/blogs">Blogs</Link></li> */}
                <li><Link href="/contact">Contact</Link></li>
              </ul>
              <ul className={styles.social_links}>
                <li><Link href="/"><FaFacebook /></Link></li>
                <li><Link href="/about"><FaInstagram /></Link></li>
                <li><Link href="/jobs"><FaLinkedin /></Link></li>
              </ul>
            </div>
          </div>

          <div className={styles.footer_tail}>
            <div className={styles.legal_disclaimer}>
              <p>© COPYRIGHT TEFL JOBS IN ASIA – 2022 ALL RIGHTS RESERVED</p>
            </div>
            <div className={styles.creator_data}>
            <Link href="https://webingspiders.com">POWERED BY WEBING SPIDERS</Link>
            </div>
          </div>
        </div>
      </footer>
)}