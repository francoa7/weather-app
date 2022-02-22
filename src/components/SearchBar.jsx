import React, { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
      // acá va tu código

      const [city, setCity] = useState("")

      const handleInputChange = (e) => {
            e.preventDefault();
            setCity(e.target.value)

      }

      return <div>

            <div className={styles.searchContainer}>
                  <form onSubmit={(e) => {
                        e.preventDefault();
                        props.onSearch(city, document.getElementById("inputSearch"))
                  }}>
                        <input onChange={(e) => handleInputChange(e)}
                              type="text" id='inputSearch' className={styles.searchInput} placeholder='Ciudad...'></input>
                        <input value="Buscar" type="submit" className={styles.btnSearch}></input>
                  </form>
            </div>
      </div>
};