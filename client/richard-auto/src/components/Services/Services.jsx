import styles from "./Services.module.css";
import serviceData from "../../utils/serviceData.json";
import ServiceItem from "./ServiceItem/ServiceItem";
import ServiceCard from "./ServiceCard/ServiceCard";




export default function Services() {

    return (

        <div id="services" className={styles['service-container']} >

            <h5>Ние предлагаме</h5>

            <section className={styles['cards-container']}  >

                {serviceData.map((service, index) => <ServiceCard  key={index} service={service} /> )}

                {/* <article className={styles['service-card']} >
                    <div className={styles['icon']}>
                        <img src="src/assets/svg/day-and-night-icon.svg" alt="battery" />
                    </div>
                    <p>Денонощно обслужване</p>
                </article>

                <article className={styles['service-card']} >
                    <div className={styles['icon']}>
                        <img src="src/assets/svg/fast-speed-icon.svg" alt="battery" />
                    </div>
                    <p>Експресно пристигане</p>
                </article>

                <article className={styles['service-card']} >
                    <div className={styles['icon']}>
                        <img src="src/assets/svg/checkmark-male-user-icon.svg" alt="battery" />
                    </div>
                    <p>Коректно отношение</p>
                </article>

                <article className={styles['service-card']} >
                    <div className={styles['icon']}>
                        <img src="src/assets/svg/low-cost-icon.svg" alt="battery" />
                    </div>
                    <p>Ниски цени</p>
                </article>

                <article className={styles['service-card']} >
                    <div className={styles['icon']}>
                        <img src="src/assets/svg/country-icon.svg" alt="battery" />
                    </div>
                    <p>В страната и чужбина</p>
                </article>

                <article className={styles['service-card']} >
                    <div className={styles['icon']}>
                        <img src="src/assets/svg/cars-icon.svg" alt="battery" />
                    </div>
                    <p>Внос на автомобили</p>
                </article>

                <article className={styles['service-card']} >
                    <div className={styles['icon']}>
                        <img src="src/assets/svg/car-document-icon.svg" alt="battery" />
                    </div>
                    <p>Съдействие при покупка</p>
                </article>

                <article className={styles['service-card']} >
                    <div className={styles['icon']}>
                        <img src="src/assets/svg/car-vehicle-sale-icon.svg" alt="battery" />
                    </div>
                    <p>Продажба на автомобили</p>
                </article>

                <article className={styles['service-card']} >
                    <div className={styles['icon']}>
                        <img src="src/assets/svg/roadside-car-assistance-icon.svg" alt="battery" />
                    </div>
                    <p>Репатриране</p>
                </article>

                <article className={styles['service-card']} >
                    <div className={styles['icon']}>
                        <img src="src/assets/svg/inverter-battery-icon.svg" alt="battery" />
                    </div>
                    <p>Подаване на ток</p>
                </article>

                <article className={styles['service-card']} >
                    <div className={styles['icon']}>
                        <img src="src/assets/svg/gas-station-icon.svg" alt="fuel" />
                    </div>
                    <p>Доставка на гориво</p>
                </article>

                <article className={styles['service-card']} >
                    <div className={styles['icon']}>
                        <img src="src/assets/svg/car-tire-wheel-icon.svg" alt="battery" />
                    </div>
                    <p>Помпане на гуми</p>
                </article> */}
            </section>

            <div className={styles['service-info']} >
                <p > <strong> Доверете се на нашите професионалисти, които са тук, за да ви предоставят надеждна помощ на пътя. Нашата мисия е да ви осигурим спокойствие и комфорт във всяка ситуация. Вижте какви услуги предлагаме: </strong></p>
                <ul className={styles['service-list']}>
                    {serviceData.map((service, index) => (
                        <ServiceItem key={index} service={service} />
                    ))}

                </ul>


            </div>

        </div>


    )
}