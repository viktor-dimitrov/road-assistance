import styles from "./ServiceItem.module.css";

 export default function ServiceItem({ service }) {
    return (
      <li className={styles['service-item']}>
        <p>
          <strong>{service.title}:</strong> {service.description}
        </p>
      </li>
    );
  }