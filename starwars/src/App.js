import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import './App.css';

//Components
import Character from './components/Character'

//Styles for components
const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  padding: 5%;
`

//Base URL to API
const baseURL = 'https://swapi.py4e.com/api/'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characterList, setCharacterList] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() =>{
    axios.get(`${baseURL}/people/`)
      .then(res => {
        setCharacterList(res.data.results)}) //Get the data if the res is get successful

      .catch(err => console.log('ERROR: ', err)) //If the get request fails log the error
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Div>
        {
          characterList.map((character, idx) => <Character key={idx} character={character} />)
        }
      </Div>
    </div>
  );
}

export default App;
