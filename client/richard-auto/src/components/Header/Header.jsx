

import styles from "./Header.module.css";


export default function Header() {

    return (

        <header>

            <nav>


                <ul className={styles['header']}>
                    <li className={styles['img']} >
                        <img className={styles['logo']} src="src/assets/images/logo-no-background.png" alt="logo" />
                    </li>

                    <li className={styles['nav']}>
                        <div>
                        <p>asdasdasdasdasdasdasdasdasdasdasd</p>
                        </div>
                      
                        <ul>
                            <li>Услуги</li>
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