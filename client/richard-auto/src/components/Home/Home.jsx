import styles from "./Home.module.css";


export default function Home() {

    return (

        <main>

          <div className={styles['title']} >
            <img src="src/assets/svg/24-hours-phone-support-icon.svg" alt="24/7" />
            <h1>ПЪТНА ПОМОЩ</h1>
            <p>+359899633333</p>

          
          </div>

          <div className={styles['img']} >
            <img src="src/assets/images/5.png" alt="" />
          </div>


        </main>

   
    )
}