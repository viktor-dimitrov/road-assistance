import React, { useState, useEffect, useRef } from 'react';

import styles from './Slideshow.module.css'



const images = [
    'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/406584140_685324683707154_4298167341238306425_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZKsJ6zMuc_oAX_JRxA5&_nc_ht=scontent.fsof8-1.fna&oh=00_AfCzubzk-TxMfXw1cZMwam0taPy-iltaB50DB2_X94G3oA&oe=65F10A17',
    'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/261350274_238303751740083_1088498460606245537_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Cj4CyzmXG94AX-rm6VO&_nc_ht=scontent.fsof8-1.fna&oh=00_AfAhHY8bRAEcCHkqwO02ICCVJci7v6Wt5UigZ7eyHB80tg&oe=65F257EC',
    'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/369969805_633705085535781_460561852780144731_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EptBdt00YtYAX_adsud&_nc_ht=scontent.fsof8-1.fna&oh=00_AfDi1guRCzV-tbDgi7TvbMkSWwUEdpjsNsYPkZgRSTAmXw&oe=65F1DA3E',
    'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/217339189_146613240909135_7898080407742965256_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=odSG3P9OizQAX8MLcSX&_nc_ht=scontent.fsof8-1.fna&oh=00_AfAW0f2vwTqLDPqPk2Gf8J458pfa8lSZP32qnejvb6ROoQ&oe=65F109A5',
    'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/287951612_364800512423739_5982966490395848068_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DwDL6WCBhQkAX-c9DAZ&_nc_ht=scontent.fsof8-1.fna&oh=00_AfD_WtJ2KZW59WkjephOmPD83-rZ713Y9esDv6_ja--6DQ&oe=65F0D63E'

  ];

  const delay = 5000;

export default function Slideshow() {

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }


    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
            resetTimeout();
        };
      }, [index]);

    return (

        <section className={styles['slideshow-container']}>
        <div className={styles['slideshow']}>
            <div className={styles['slideshowSlider']} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {images.map((image, index) => (<img className={styles['slide']} key={index} src={image} alt="car" />))}
            </div>

            <div className={styles['slideshowDots']}>
                {images.map((_, idx) => (<div key={idx} className={`${styles.slideshowDot}${index === idx ? ` ${styles.active}` : ""}`}  onClick={() => {setIndex(idx)}}></div>))}
            </div>
        </div>
        </section>

    )
}