
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
                    <div className={styles['logo-container']} >
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
                        <a href="/">Начало</a>
                    </li>

                    <li>
                        <a href="/services">Услуги</a>
                    </li>

                    <li>
                        <a href="/contacts">Контакти</a>
                    </li>

                    <li>
                        <a href="/about">За Нас</a>
                    </li>
                </ul>
            </nav>


            <hr />

            <div className={styles['dev-container']}>

                <div className={styles['dev-logo']} >
                    <img src="/svg/dev-logo-no-background.svg" alt="V.Dimitroff" />
                    <ul className={styles['social-media']}>
                        <li>
                            <a href="https://github.com/viktor-dimitrov">
                                <img src="/svg/github-icon.svg" alt="github" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/viktor-g-dimitrov/">
                                <img src="/svg/linkedin-icon.svg" alt="linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100012229204864&locale=en_EN">
                                <img src="/svg/dev-facebook.svg" alt="linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles['copyright']}>
                    <p>&copy; 202 V.Dimitroff. All rights reserved.</p>
                </div>




            </div>


        </footer>
    )
}