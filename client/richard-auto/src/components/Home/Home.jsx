import styles from "./Home.module.css";


export default function Home() {

    return (

        <main>

        <div className={styles['background']}>
          <img className={styles['background-img']} src="/images/bg5.png" alt="road" />
        </div>


        <div className={styles['title']} >


          <h1 > <strong>24/7</strong> <strong> ПЪТНА ПОМОЩ  </strong> </h1>
          <button className={styles['callme']}><img src="/svg/24-hours-phone-support-icon.svg" alt="24/7" />  <p>0899633333</p></button>



        </div>


        <div className={styles['main-img']} >

          <img src="/images/main.png" alt="road-assistance" />
        </div>


      </main>

   
    )
}