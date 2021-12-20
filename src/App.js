import logo from './logo.svg';
import './App.css';
import keys from './Key.js';
import react, { Component } from "react";
import CenterContainer from './components/CenterContainer';
import NavbarApp from './components/NavbarApp';
import { Button, Card, Row, Col, Container, Nav, Navbar, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { getSuggestedQuery } from '@testing-library/react';
import React, { useState } from "react";






const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL
}


function App() {
  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };





  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };



  return (
    <div><header><NavbarApp /></header>
      <div
        className={
          typeof weather.main != "undefined"
            ? weather.main.temp > 18
              ? ((weather.sys.sunrise < weather.dt && weather.dt < weather.sys.sunset) ? "App-Sunny-Day" : "App-Sunny-Night")
              : ((weather.sys.sunrise < weather.dt && weather.dt < weather.sys.sunset) ? "App-Cold-Day" : "App-Cold-Night")
            : "App"
        }
      >
        <main>
          <center>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-bar"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
              />
            </div>
            {typeof weather.main != "undefined" ? (
              <div className='mainbox'>

                <div className="location-container">
                  <div className="location">
                    {weather.name}, {weather.sys.country}
                  </div>
                  <div className="date"> {dateBuild(new Date())}</div>
                </div>

                <div className="weather-container">
                  <div className="temperature">
                    {Math.round(weather.main.temp)}°C
                  </div>

                  <div className="weather">{weather.weather[0].main}</div>
                </div>

              </div>
            ) : (
              <div className='mainbox'>
                <div className="location-container">

                  <div className="date"> {dateBuild(new Date())}</div>
                </div>
                <div className="weather-container">
                  <div className="temperature">
                  </div>
                  <div className="weather"></div>
                </div>

              </div>
            )}
          </center>
        </main>
      </div>
    </div>
  );
}

export default App;
