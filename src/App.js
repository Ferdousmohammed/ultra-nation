
import './App.css';
import React, {useEffect, useState} from 'react'
import Country from './components/Country/Country';
function App() {
const [contries, setContries] = useState([])

  //  faching data
 useEffect (()=> {
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    setContries(data)
    console.log(data);
    const nam = data.map(country => country.flag)
    console.log(nam);})

    .catch(error => console.log(error))
 }, [])

  return (
    <div className="App">
      <header className="App-header">
          <p>this is my ultra nation rest api: {contries.length} </p>
         
            {
            contries.map(country => <Country country = {country}> </Country>)
            }
        
          
      </header>
    </div>
  );
}

export default App;
