import contactsData from "../../utils/contactsData.json";
import ContactCard from "../ContactCard/ContactCard";
// import ContactsForm from "../ContactForm/ContactForm";
import Map from "../Map/Map";



import styles from "./Contacts.module.css"

export default function Contacts() {



    return (

        <div className={styles['contacts-container']} >

            {/* <img className={styles['background-img']} src="/images/background.jpg" alt="road" /> */}


            <section className={styles['cards-container']} >
                {contactsData.map((contact, index) => (<ContactCard key={index} contact={contact} />))}
            </section>

           
                <div className={styles['form-container']} >
                    {/* <ContactsForm /> */}
                    <div className={styles['map-container']} >
                    <Map />
                    </div>
                </div>
               
              
                  
                   
           

        </div>
    )
}