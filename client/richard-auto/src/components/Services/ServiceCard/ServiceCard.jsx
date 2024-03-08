import styles from "./ServiceCard.module.css";

export default function ServiceCard({ service }) {
    return (
        <article className={styles['service-card']} >
            <div className={styles['icon']}>
                <img src={`/src/assets/svg/${service.icon}`} alt={service.title} />
            </div>
            <p>{service.title}</p>
        </article>
    );
}