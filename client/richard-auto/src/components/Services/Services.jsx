import styles from "./Services.module.css";

export default function Services () {

    return(
        <section>

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
            </article>


        </section>
    )
}