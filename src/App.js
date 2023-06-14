import './App.css';

const getAirQuality = async (city) => {
  try{                                                          //create-react-app handles env variables so no need to npm i env
    const response = await fetch(`https://api.waqi.info/feed/${city}/?token=${REACT_APP_AQI_API_TOKEN}`)
  }catch {

  }
}

function App() {
  return (
    <h1>Hello Universe</h1>
  );
}

export default App;
