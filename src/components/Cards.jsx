import React from 'react';
import styles from './Cards.module.css'

import Card from './Card.jsx';

export default function Cards({ cities, onClose }) {
      if (Array.isArray(cities) && cities.length) {
            return (
                  <div className={styles.cards_container}>
                        {
                              cities.map(function (x, index) {
                                    let key = "" + x + index + Math.random() * 300;
                                    return <Card key={key}
                                          id={x.id}
                                          max={x.min}
                                          min={x.max}
                                          name={x.name}
                                          img={x.img}
                                          onClose={() => onClose(x.id)}
                                          btnClassName="btn_closecard"
                                    />
                              })
                        }
                  </div>
            );
      } else {
            return (
                  <div className={styles.cards_container}>
                        <h4 className={styles.noCities}>Busca una ciudad para ver el clima</h4>
                  </div>
            )
      }
}
