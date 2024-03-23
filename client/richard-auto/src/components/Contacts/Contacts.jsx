
import styles from "./Contacts.module.css";
import contactsData from "../../utils/contactsData.json";

import ContactsForm from "../ContactForm/ContactForm";
import ContactCard from "../ContactCard/ContactCard";



export default function Contacts () {



    return(
      

        <div className={styles['contacts-container']}>
              <h2>Свържете се с нас</h2>
         
            {/* <section className={styles['cards-container']}  >
                {contactsData.map((contact, index) => <ContactCard  key={index} contact={contact}  /> )}
            </section> */}

          
            <div className={styles['map-form-container']}>
                <ContactsForm></ContactsForm>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d374235.9053777408!2d22.72646085410158!3d42.87879569981175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aab9005dc26a8d%3A0x50c3d7bb454adf86!2z0J_RitGC0L3QsCDQv9C-0LzQvtGJIDI0LzcgLSBSaWNoYXJkIEF1dG8!5e0!3m2!1sbg!2sbg!4v1711126990030!5m2!1sbg!2sbg" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    )
}