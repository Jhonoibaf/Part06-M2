import React from 'react';
import styles from './Card.module.css'

export default function Card(props) {
  // acá va tu código
  return <div>
          <button className={styles.close_button} onClick={props.onClose}>X</button>
          <h1>{props.name}</h1>
          <div className={styles.card_weather_info}>
            <div>
              <p>Min</p>
              <p>{props.min}</p>
            </div>
            <div>
              <p>Max</p>
              <p>{props.max}</p>
            </div>
            <div>
            <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img"/>
            </div>
          </div>
      </div>
  };