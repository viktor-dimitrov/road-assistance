

import styles from "./Header.module.css";


export default function Header() {

    return (

        <header>
            <div className={styles['top']}>
                <ul>
                    <li> <q> Тука некъв Слоган </q> </li>
                    <li>Sofia, Bulgaria</li>
                    <li> phone: +359899633333  <span >24/7</span> </li>
                </ul>
            </div>

            <section className={styles['we']} >
            <div className={styles['logo']} >
              <h1>Richard Auto</h1>
           
            </div>
            <h2>некво лого тука</h2>
            
            <div>
                <h1> тука некъв лиценз</h1>
            </div>
            
            </section>

            <nav>
                <ul>
                    <li>Услуги</li>
                    <li> За нас</li>
                    <li>Галерия</li>
                    <li>Контакти</li>
                
                </ul>
            </nav>
        
        
            

        </header>
    )
}