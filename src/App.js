import React from 'react';
//import {useEffect, useState} from 'react';
import {useEffect} from 'react';

function App() {
  GetWeather();
  const value = 'Kim';
  return <div>Hello {value}</div>;
}

function GetWeather() {
  const url = 'https://api.weatherapi.com/v1/current.json?key=3de6c9f8c2504acaa36202353230902&q=Copenhagen&aqi=no';
  useEffect(() => {
    fetch(url)
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          //setPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);
}

export default App;
