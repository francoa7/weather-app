import React from 'react';
import styles from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card(props) {
      let url = `http://openweathermap.org/img/wn/${props.img}@2x.png`
      let min_celsius = props.min + " C°";
      let max_celsius = props.max + " C°";
      console.log("PROPS")
      console.log(props)
      // acá va tu código
      return <div className={styles.temp_container}>

            < button className={styles[props.btnClassName]} onClick={props.onClose} > X</button >
            <Link to={`/ciudad/${props.id}`}>
                  <h3>{props.name}</h3>
            </Link>
            <div className={styles.temp_div}>
                  <div  >
                        <h4>Min</h4>
                        <h4> {min_celsius}</h4>
                  </div>
                  <div>
                        <h4>Max</h4>
                        <h4> {max_celsius}</h4>
                  </div>
                  <img className={styles.ic_temp} src={url} alt="icono de clima" />
            </div>

      </div >
};