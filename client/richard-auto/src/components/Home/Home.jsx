import styles from "./Home.module.css";


export default function Home() {

    return (

        <main>

          <div className={styles['title']} >
            <h5>24/7</h5>
            <h1>ПЪТНА ПОМОЩ</h1>
            <p>+359899633333</p>

          
          </div>

          <div className={styles['img']} >
            <img src="src/assets/images/5.png" alt="" />
          </div>


        </main>

   
    )
}