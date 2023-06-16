import React, {useState} from 'react';
import './App.css';
import CitySearch from './CitySearch';
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {
  const [airQualityData, setAirQualityData] = useState(null)
  const [error, setError] = useState(null);

    const getAirQuality = async (city) => {
      try{                             //create-react-app handles env variables so no need to npm i env
        const response = await fetch(`https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_AQI_API_TOKEN}`)
        const data = await response.json()
        console.log(data)
        if(response.ok && data.status === 'ok'){
          setAirQualityData(data.data)
          setError(null)
        }else {
          setError("Sorry, we couldn't find the city you were looking for. Try another location or make sure spelling is correct.")
          setAirQualityData(null)
        }
      }catch (error) {
        console.error('network error:', error)
        setError('Sorry, something went wrong')
        setAirQualityData(null)
        //set error state
        //set air quality data to nu ll
      }
    }
    return (
      <div className= 'container'>
      <h1 className = 'mt-5 mb-3'>Air Quality Index Checker</h1>
      <CitySearch getAirQuality={getAirQuality}/> 
      {error && (
        <div className = 'alert alert-danger' role='alert'>
          {error}
          </div>
      )}
      {airQualityData && (
        //Air Quality Card Componet
        //Pollutam t Info
        <>
        
        </>
      )}
      </div>
    );
}

export default App;
