import React from 'react';
import {useEffect, useState} from 'react';

function App() {
   const [weather, setWeather] = useState([]);
   const url = 'https://api.weatherapi.com/v1/current.json?key=3de6c9f8c2504acaa36202353230902&q=Copenhagen&aqi=no';
   useEffect(() => {
      fetch(url)
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setWeather(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
   
   const value = 'Kim';
   return 
      (
         <div>
            <div>Hello {value}</div>
            <div>
               {weather.location}
            </div>
         </div>
      );
}

function GetWeather() {
  
}

export default App;
