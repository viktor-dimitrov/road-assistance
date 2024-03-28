import reviewsData from "../../utils/reviewsData.json";

import styles from "./Reviews.module.css";



export default function Reviews() {


    const starsArray = Array(5).fill(null);



    return (

      <div className={styles['reviews-container']}>
        <h2>Какво казват нашите клиенти</h2>
        <div className={styles['review-list']}>
          {reviewsData.map((review) => (
            <div key={review.id} className={styles['review-item']}>
              <div className={styles['review-author']}> 
              <img src={review.image} alt="1" />
              <div className={styles['name-container']} >
              <p className={styles['review-author-name']}>{`${review.author}`}</p>
              <div className={styles['stars-container']}>
                {starsArray.map((star, index) =>  star = <img src="/svg/star-icon.svg" alt="star" key={index} />  )}
              </div>
              </div>
               </div>
              <p className={styles['review-content']}>{review.content}</p>

            </div>
        ))}
      </div>
    </div>


    )
}