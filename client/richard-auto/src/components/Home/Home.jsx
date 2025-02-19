import contactsData from "../../utils/contactsData.json";

import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./Home.module.css";

import serviceData from "../../utils/serviceData.json";
import ContactCard from "../ContactCard/ContactCard";
import Map from "../Map/Map";
import { Link } from "react-router-dom";




export default function Home() {

  return (
    <>
      <main>

        <div className={styles['background']}>
          <img className={styles['background-img']} src="/images/bg5.webp" alt="road" />
        </div>


        <div className={styles['title']} >


          <h1 > <strong>24/7</strong> <strong> ПЪТНА ПОМОЩ  </strong> </h1>
          <Link to="tel:+359899633333" className={styles['callme']}><img src="/svg/24-hours-phone-support-icon.svg" alt="24/7" className={styles['callme-icon']} />  <p>0899633333</p></Link>

        </div>

        <div className={styles['main-img']} >
          <img src="/images/main2.webp" alt="road-assistance" />
        </div>
      </main>

      <div id="services" className={styles['service-container']} >
        <section className={styles['service-cards']}  >
          {serviceData.map((service, index) => <ServiceCard key={index} service={service} />)}
        </section>
      </div>

      <section className={styles['contacts-container']}  >

      {contactsData.map((contact, index) => (<ContactCard  key={index} contact={contact} />))}

      </section>

      

      <Map></Map>


    </>

   
    )
}