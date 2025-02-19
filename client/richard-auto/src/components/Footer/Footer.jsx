
import { Link } from "react-router-dom";
import contactsData from "../../utils/contactsData.json";

import ContactCard from "../ContactCard/ContactCard";
import Reviews from "../Reviews/Reviews";
import Slideshow from "../Slideshow/Slideshow";

import styles from "./Footer.module.css";




export default function Footer() {



    return (

        <footer>
            <hr />
            <Reviews></Reviews>

            <Slideshow></Slideshow>



            <div className={styles['info-container']}>
                <div className={styles['brand-container']} >
                    <div className={`${styles['logo-container']} ${styles['dark-bg']}`} >
                        <img className={styles['logo']} src="/images/logo-no-background.png" alt="logo" />
                    </div>
                </div>

                <section className={styles['cards-container']}  >
                    {contactsData.map((contact, index) => (<ContactCard key={index} contact={contact} />))}
                </section>
            </div>


           <hr />


            <nav className={styles['quick-nav']}>
                <ul>
                    <li>
                        <Link to="/">Начало</Link>
                    </li>

                    <li>
                        <Link to="/services">Услуги</Link>
                    </li>

                    <li>
                        <Link to="/contacts">Контакти</Link>
                    </li>

                    <li>
                        <Link to="/about">За Нас</Link>
                    </li>
                </ul>
            </nav>


            <hr />

            <div className={styles['dev-container']}>

                <div className={styles['dev-logo']} >
                    <img src="/svg/dev-logo-no-background.svg" alt="V.Dimitroff" />
                    <ul className={styles['social-media']}>
                        <li>
                            <Link to="https://github.com/viktor-dimitrov"  target="_blank" rel="noopener noreferrer">
                                <img src="/svg/github-icon.svg" alt="github" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.linkedin.com/in/viktor-g-dimitrov/"  target="_blank" rel="noopener noreferrer">
                                <img src="/svg/linkedin-icon.svg" alt="linkedin" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.facebook.com/profile.php?id=100012229204864&locale=en_EN"  target="_blank" rel="noopener noreferrer">
                                <img src="/svg/dev-facebook.svg" alt="linkedin" />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={`${styles['copyright']} ${styles['dark-bg']}`}>
                    <p>&copy; 2025 V.Dimitroff. All rights reserved.</p>
                </div>




            </div>


        </footer>
    )
}