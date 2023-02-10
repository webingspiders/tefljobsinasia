import Image from 'next/image'
import Link from 'next/link'
import FooterLogo from '../public/TEFL Jobs in Asia Logo.png'
import styles from '../styles/Header.module.css'
import Container from './Container'
import {RxCaretDown} from 'react-icons/rx'
import { FaSignInAlt, FaHamburger, FaCross } from 'react-icons/fa'
import {useState} from 'react'

export default function Header() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleClick = () => {
        setShowMobileMenu(true);
    }
    const handleClose = () => {
        setShowMobileMenu(false);
    }
    return(
        <header className={styles.header}>
            <div className={styles.header_container}>
            <a href="/" className={styles.logo}>
                <Image className={styles.logo_img} src={FooterLogo}/>
            </a>

            <div className={styles.main_nav}>
                <ul className={styles.nav_links}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li id={styles["jobs"]}>
                    <span>Jobs<RxCaretDown/></span>
                    <div className={styles.submenu}>
                        <ul className={styles.submenu_nav_links}>
                            <li><Link href="/native">Native</Link></li>
                            <li><Link href="/non-native">Non-native</Link></li>
                        </ul>
                    </div>
                </li>
                {/* <li><Link href="/blogs">Blogs</Link></li> */}
                <li><Link href="/contact">Contact</Link></li>
                </ul>
                <button className={styles.mobile_menu} onClick={handleClick} type="button"><FaHamburger /></button>
                {showMobileMenu && <div className={styles.mobile_menu_popup}>
                    <button className={styles.close_popup_menu} onClick={handleClose} type="button">X</button>
                    <ul className={styles.mobile_nav_links}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li id={styles["jobs"]}>
                        <span>Jobs<RxCaretDown/></span>
                        <div className={styles.submenu}>
                            <ul className={styles.submenu_nav_links}>
                                <li><Link href="/native">Native</Link></li>
                                <li><Link href="/non-native">Non-native</Link></li>
                            </ul>
                        </div>
                    </li>
                    {/* <li><Link href="/blogs">Blogs</Link></li> */}
                    <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>}
            </div>
            </div>
        </header>
)}