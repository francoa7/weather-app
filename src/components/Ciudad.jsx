import React, { useState } from 'react';
import styles from './Ciudad.module.css'
const apiKey = "4ae2636d8dfbdc3044bede63951a019b";


export default function Ciudad({ city, id }) {
      //Utilizo estado para que cuando se encuentre la ciudad, me actualice el render
      const [myCity, setCity] = useState(city);

      // Si no hay ciudad hago un fetch para traer esa ciudad con el respectivo ID de la URL
      if (!myCity) {

            fetch(
                  `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric `
            )
                  .then((r) => r.json())
                  .then((recurso) => {
                        if (recurso.main !== undefined) {
                              // Actualizo el estado pasándole un objeto ciudad
                              setCity({
                                    min: Math.round(recurso.main.temp_min),
                                    max: Math.round(recurso.main.temp_max),
                                    img: recurso.weather[0].icon,
                                    id: recurso.id,
                                    wind: recurso.wind.speed,
                                    temp: recurso.main.temp,
                                    name: recurso.name,
                                    weather: recurso.weather[0].main,
                                    clouds: recurso.clouds.all,
                                    latitud: recurso.coord.lat,
                                    longitud: recurso.coord.lon,
                              })

                        } else {
                              //Si no encuentro ciudad, establezco la ciudad como vacía
                              setCity("No se encontró ciudad");

                        }
                  })

      }
      return (
            <div>
                  {/* Si myCity existe; si es un objeto; devuelvo su información, si no es un objeto, es porque no se encontró */}
                  {myCity ? (typeof myCity === 'object') ?
                        // myCity existe y es un objeto
                        (<div className="ciudad">
                              <div className={styles.city_container}>
                                    <div>
                                          <h2 >{myCity.name}</h2>
                                          <img width="200px" src={`http://openweathermap.org/img/wn/${myCity.img}@2x.png`} alt="clima" />
                                    </div >

                                    <div>
                                          <h5>Temperatura: {myCity.temp} ºC</h5>
                                          <h5>Viento: {myCity.wind} km/h</h5>
                                          <h5>Cantidad de nubes: {myCity.clouds}</h5>
                                    </div>
                                    <div>
                                          <h5>Latitud: {myCity.latitud}º</h5>
                                          <h5>Longitud: {myCity.longitud}º</h5>
                                    </div>
                              </div >
                        </div >)
                        :
                        // miCity existe, pero no es un objeto, es el string "No se encontró ciudad"
                        (< div className={styles.city_container} >
                              <h4 className={styles.noCities}>La ciudad buscada no existe</h4>
                        </div >)
                        :
                        // miCity no existe
                        (< div className={styles.city_container} >
                              <h4 className={styles.noCities}>Cargando...</h4>
                        </div >)}
            </div>
      )

}

