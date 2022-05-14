import React from 'react';
import Card from './Card';
import styles from './Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  const cities = props.cities
  return <div className={styles.cards_wrap}>{
                cities.map((city) => {
                    return <Card 
                    name={city.name}
                    min={city.main.temp_min}
                    max={city.main.temp_max}
                    img={city.weather[0].icon}
                    onClose={()=> alert('cerrar')}
                    />
                  }
                )
              }
         </div>
};