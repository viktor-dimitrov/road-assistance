import styles from "./Services.module.css";
import serviceData from "../../utils/serviceData.json";


import ServiceCard from "../ServiceCard/ServiceCard";

export default function Services() {

    return (

        <div id="services" className={styles['service-container']} >


          <img className={styles['background-img']} src="/images/asphaltbg.jpg" alt="road" />
       


            <h5>Услуги</h5>

        

            <div className={styles['service-info']} >
               
                <ul className={styles['service-list']}>
                    {serviceData.map((service, index) => (


                        <li key={index} className={styles['service-item']}>
                            <ServiceCard key={index} service={service} />
                            <p>
                                <strong>  {service.description} </strong>
                            </p>
                        </li>



                    ))}
                </ul>
              
            </div>

        </div>
    )
}