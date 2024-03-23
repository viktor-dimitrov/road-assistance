

import styles from "./Header.module.css";


export default function Header() {

    return (

        <header className={styles['header-container']}>
            <nav>
                <ul className={styles['header-ul']}>
                    <li className={styles['logo-container']} >
                        <img className={styles['logo']} src="/images/logo-no-background.png" alt="logo" />
                    </li>

                    <li className={styles['nav']}>
                        <div>
                       <p> Вашето решение за надеждна и бърза помощ на пътя!</p>
                        </div>
                      
                        <ul className={styles['menu']}>
                            <li> <a href="#services">Услуги</a>  </li>
                            <li> За нас</li>
                            <li>Галерия</li>
                            <li>Контакти</li>
                        </ul>
                    </li>

                </ul>
            </nav>

        
            

        </header>
    )
}