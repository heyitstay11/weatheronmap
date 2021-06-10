import React, { useState } from 'react';
import { fetchWeather } from './fetchWeather';
import Map from './Map';


function App() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
      if(e.key == 'Enter'){
        try {
          const data = await fetchWeather(query);
          setWeather(data);
          setQuery('');
        } catch (error) {
          console.log(error);
        }}
  }


  return (
    <div className="main-container">
      <h1>Weather App</h1>
       <input type="text" className="search"
             value={query} placeholder="Search ..."
             onChange={(e) => setQuery(e.target.value)}
             onKeyPress={(e) => search(e)}
           />

           {weather.main && (
               <div className="city">
                     <h2 className="city-name">
                         <span>{weather.name}</span>
                         <sup>{weather.sys.country}</sup>
                         <div className="center">
                         <span>{Math.round(weather.main.temp)}
                          <sup>&deg;C</sup></span>
                         </div>
                     </h2>
             </div>
           )}
           <Map weather={weather} />
      </div>  
  )
}

export default App
