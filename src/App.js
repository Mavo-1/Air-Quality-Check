import React, {useState} from 'react';
import './App.css';




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
        }
      }catch (error) {
        console.error('network error:', error)
        //set error state
        //set air quality data to nu ll
      }
    }
    return (
      <h1>Hello Alex</h1>
    );
}

export default App;
