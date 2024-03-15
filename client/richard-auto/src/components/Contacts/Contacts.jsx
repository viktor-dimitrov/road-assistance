
import styles from "./Contacts.module.css";
import contactsData from "../../utils/contactsData.json";

import ContactsForm from "./ContactsForm.jsx/ContactsForm";
import ContactCard from "./ContactCard/ContactCard";



export default function Contacts () {



    return(
      

        <div className={styles['contacts-container']}>
         
            <section className={styles['cards-container']}  >
                {contactsData.map((contact, index) => <ContactCard  key={index} contact={contact}  /> )}
            </section>

            <h2>Свържете се с нас</h2>

            <ContactsForm></ContactsForm>



        </div>
    )
}