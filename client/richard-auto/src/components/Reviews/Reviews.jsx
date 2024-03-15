import styles from "./Reviews.module.css";

const reviewsData = [
  {
    id: 1,
    author: 'Христо Йорданов',
    content: 'Бърз и ефективен отговор в сложни ситуации. Препоръчвам горещо.',
    image: 'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/290634577_1499136480503978_7996334184311297303_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fcUoHiOIL4EAX8V1OJF&_nc_ht=scontent.fsof8-1.fna&oh=00_AfBRC8SfQJgoGkojN6uw-D0vVyn8RDOzrJvRi0hEz-Bhyw&oe=65F1F2A1'
  },
  {
    id: 2,
    author: 'Ина Димитрова',
    content: 'Професионални и отзивчиви. Определено ще ги избера отново, ако имам нужда от пътна помощ.',
    image: 'https://scontent.fsof8-1.fna.fbcdn.net/v/t1.6435-9/120224975_739006323346120_8929452129794507926_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xfSh6SsJuXEAX8AfuIZ&_nc_ht=scontent.fsof8-1.fna&oh=00_AfBOPHzaQW62rQviDhghPX6bYbHAg8pwK8GJOxwFI04zlg&oe=66140694'
  },
  {
    id: 3,
    author: 'Ал. Владимирович',
    content: 'Благодаря ви за бързата реакция и качественото обслужване. Истински спасител в трудни моменти!',
    image: 'https://scontent.fsof8-1.fna.fbcdn.net/v/t1.6435-9/72717235_10206796486788579_2789104938288939008_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZhxyHCg0LSkAX8cHFeJ&_nc_ht=scontent.fsof8-1.fna&oh=00_AfCKPYoXvRsfq3sAKt4-f9uYTPWoWqvjfvW_fvo0CbmaIg&oe=6613FC18'
  },
];


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