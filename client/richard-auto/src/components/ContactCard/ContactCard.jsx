import styles from "./ContactCard.module.css";

export default function ContactCard({ contact }) {
   
    return (
        <article className={styles['contact-card']} >
            <div className={styles['icon']}>
                <img src={`/svg/${contact.icon}`} alt={contact.title} />
            </div>

            <p>{contact.contact}</p>
        </article>
    );
}