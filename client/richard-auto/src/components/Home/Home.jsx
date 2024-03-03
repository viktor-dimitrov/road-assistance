import styles from "./Home.module.css";


export default function Home() {

    return (

        <main>

          <div className={styles['title']} >
          {/* <div  className={styles['logo']} >
                <img  src="src/assets/images/logo-color.png" alt="logo" />
            </div> */}
            <h5>24/7</h5>
            <h1>ПЪТНА ПОМОЩ</h1>
            <p>0889633333</p>

          
          </div>

          <div className={styles['img']} >
            <img src="src/assets/images/5.png" alt="" />
          </div>


        </main>

   
    )
}