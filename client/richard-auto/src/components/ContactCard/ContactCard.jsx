import { Link } from "react-router-dom";
import styles from "./ContactCard.module.css";



export default function ContactCard({contact}) {

    
   
    return (

                <Link to={contact.link} className={styles['contact-card']} >
                
                    <div className={styles['icon']}>
                        <img src={`/svg/${contact?.icon}`} alt={contact?.title} />
                    </div>
                    <p>{contact?.contact}</p>
                  
                </Link>
     
    );
}