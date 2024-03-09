import styles from "./Reviews.module.css";

const reviewsData = [
  {
    id: 1,
    author: 'John Doe',
    content: 'Бърз и ефективен отговор в сложни ситуации. Препоръчвам горещо.',
  },
  {
    id: 2,
    author: 'Jane Smith',
    content: 'Професионални и отзивчиви. Определено ще ги избера отново, ако имам нужда от пътна помощ.',
  },
  {
    id: 3,
    author: 'Mike Johnson',
    content: 'Благодаря ви за бързата реакция и качественото обслужване. Истински спасител в трудни моменти!',
  },
];


export default function Reviews() {


    return (

      <div className={styles['reviewsContainer']}>
      <h2>Отзиви</h2>
      <div className={styles['reviewList']}>
        {reviewsData.map((review) => (
          <div key={review.id} className={styles['reviewItem']}>
            <p className={styles['reviewContent']}>{review.content}</p>
            <p className={styles['reviewAuthor']}>{`- ${review.author}`}</p>
          </div>
        ))}
      </div>
    </div>


    )
}