

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
{/* 
            <section className={styles['we']} >
            <div className={styles['logo']} > 
            <img src="src/assets/svg/logo-color.svg" alt="logo" />
            </div>
            
            <div>
                
            </div>
            
            <div>
                <h1> тука некъв лиценз</h1>
            </div>
            
            </section> */}

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