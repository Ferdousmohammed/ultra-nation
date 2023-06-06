
import './App.css';
import React, {useEffect, useState} from 'react'
import Country from './components/Country/Country';
function App() {
const [contries, setContries] = useState([])


const [cart, setCart] = useState([])

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
 //setting a button 
   const handleAddButton = (country)=>{ 
    const newCart = [...cart, country]
     setCart(newCart);
   };
   
  return (
    <div className="App">
      <header className="App-header">
          <p>this is my ultra nation rest api: {contries.length} </p>
          <p>Country Added :{cart.length} </p>
         
            {
            contries.map(country => <Country country = {country} handleAddButton = {handleAddButton}> </Country>)
            }
        
          
      </header>
    </div>
  );
}

export default App;
