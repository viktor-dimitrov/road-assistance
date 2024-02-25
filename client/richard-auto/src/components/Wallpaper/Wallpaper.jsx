import styles from "./Wallpaper.module.css";

export default function Wallpaper () {

    return (
        <div className={styles['img']} >
        <img   src="src/assets/images/2.jpg" alt="wallpaper" />
        <div className={styles['callme']}>
        <button onclick="callNumber('+359883357609')"> ОБАДИ СЕ </button>
        <h1>24/7 ПЪТНА ПОМОЩ</h1>
        </div>
      </div>
    )
}