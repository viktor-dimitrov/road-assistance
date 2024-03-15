import React, { useState, useEffect, useRef } from 'react';

import styles from './Slideshow.module.css'



const images = [
    '/images/g-class.jpg',
    '/images/bus.jpg',
    '/images/peugeot.jpg',
    '/images/bmw.jpg',
    '/images/audi.jpg',

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