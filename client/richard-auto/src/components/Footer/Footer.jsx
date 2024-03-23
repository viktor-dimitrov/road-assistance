
import contactsData from "../../utils/contactsData.json";

import ContactCard from "../ContactCard/ContactCard";
import Reviews from "../Reviews/Reviews";
import Slideshow from "../Slideshow/Slideshow";

import styles from "./Footer.module.css";




export default function Footer () {



    return (

        <footer>

            <Reviews></Reviews>

            <Slideshow></Slideshow>

        <div  className={styles['info-container']}> 

            <nav>
                <ul>
                    <li>
                        <a href="#">Услуги</a>
                    </li>

                    <li>
                        <a href="#">Контакти</a>
                    </li>

                    <li>
                        <a href="#">Галерия</a>
                    </li>
                </ul>
            </nav>


            <section className={styles['cards-container']}  >

{contactsData.map((contact, index) => (<ContactCard  key={index} contact={contact} />))}

</section>

            </div>



        </footer>
    )
}