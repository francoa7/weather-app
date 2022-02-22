import React, { useState } from "react";
import { Route } from "react-router-dom";
import About from "../components/About";
import "./App.css";
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import Ciudad from "../components/Ciudad";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
    const [cities, setCities] = useState([]);
    function onClose(id) {
        setCities((oldCities) => oldCities.filter((c) => c.id !== id));
    }

    const prueba = fetch(
        "https://sqs.eu-west-1.amazonaws.com/765151898027/QAS_ArgentinaStore_55710?Action=ReceiveMessage&MaxNumberOfMessages=1&VisibilityTimeout=15&AttributeName=All"
    ).then((response) => console.log(response));
    console.log(prueba);

    function onSearch(ciudad, input) {
        //Llamado a la API del clima
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
        )
            .then((r) => r.json())
            .then((recurso) => {
                if (recurso.main !== undefined) {
                    console.log("FETCH");
                    console.log(recurso);
                    const ciudad = {
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
                    };
                    console.log("CIUDAD CREADA");
                    console.log(ciudad);
                    setCities((oldCities) => [...oldCities, ciudad]);
                } else {
                    alert("Ciudad no encontrada");
                }
                input.value = "";
            });
    }
    function onFilter(ciudadId) {
        let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
        if (ciudad.length > 0) {
            return ciudad[0];
        } else {
            return null;
        }
    }
    return (
        <div className="App">
            <header>
                <Nav onSearch={onSearch} />
                <Route
                    path="/"
                    exact
                    render={function () {
                        return (
                            <div>
                                <Cards cities={cities} onSearch={onSearch} />
                            </div>
                        );
                    }}
                />
            </header>
            <Route path="/about" component={About} />
            <Route
                exact
                path="/ciudad/:ciudadId"
                render={({ match }) => (
                    <Ciudad
                        city={onFilter(match.params.ciudadId)}
                        id={match.params.ciudadId}
                    />
                )}
            />
            <hr />
        </div>
    );
}

export default App;
