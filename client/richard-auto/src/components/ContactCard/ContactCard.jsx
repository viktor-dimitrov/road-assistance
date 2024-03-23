import styles from "./ContactCard.module.css";



export default function ContactCard({contact}) {

    
   
    return (

                <a href={contact.link} className={styles['contact-card']} >
                
                    <div className={styles['icon']}>
                        <img src={`/svg/${contact?.icon}`} alt={contact?.title} />
                    </div>
                    <p>{contact?.contact}</p>
                  
                </a>
     
    );
}