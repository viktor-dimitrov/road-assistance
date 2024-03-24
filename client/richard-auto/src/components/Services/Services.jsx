import styles from "./Services.module.css";
import serviceData from "../../utils/serviceData.json";

import ServiceItem from "../ServiceItem/ServiceItem";
import ServiceCard from "../ServiceCard/ServiceCard";

export default function Services() {
    
    return (

        <div id="services" className={styles['service-container']} >

             <h5>Услуги</h5>

            <section className={styles['cards-container']}  >
                {serviceData.map((service, index) => <ServiceCard  key={index} service={service}  /> )}
            </section>
 
            <div className={styles['service-info']} >
                <p className={styles['service-info-title']}> <strong> Доверете се на нашите професионалисти, които са тук, за да ви предоставят надеждна помощ на пътя. Нашата мисия е да ви осигурим спокойствие и комфорт във всяка ситуация. Вижте какви услуги предлагаме: </strong></p>
                <ul className={styles['service-list']}>
                    {serviceData.map((service, index) => (<ServiceItem key={index} service={service} />))}
                </ul>
                
            </div> 

        </div>
    )
}