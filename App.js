import React from 'react';
// Import data and WeatherCard here
import cities  from './data';
import WeatherCard from './components/WeatherCard';

function App() {
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {/* Map through the cities array and render a WeatherCard component for each city */}
                {cities.map((city, index) => {
                    return <WeatherCard key = {index} city = {city.city} temperature = {city.temperature} forecast = {city.forecast} />
                })}
                


            </div>
            
        </>
    )
}

export default App;