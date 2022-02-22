import React from 'react';
import styles from './About.module.css'

function About() {
      return <div className={styles.cards_container}>

            <h4>Weather SPA</h4>
            <h5>Desarrollada por Franco Angulo</h5>
            <div className={styles.contact_container}>
                  <div className="column_displayer">
                        <h5>Email</h5>
                        <p>francoangulo2001@gmail.com</p>
                  </div>
                  <div className="column_displayer">
                        <h5>LinkedIn</h5>
                        <a href="https://www.linkedin.com/in/franco-angulo/" target="blank">https://www.linkedin.com/in/franco-angulo/</a>
                  </div>
                  <div className="column_displayer">
                        <h5>GitHub</h5>
                        <a href='https://github.com/francoa7'>https://github.com/francoa7</a>
                  </div>
            </div>
      </div>;
}

export default About;
