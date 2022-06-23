import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
// import Coin from './components/Coin'
// import StarWars from './components/StarWars';
import PokemonAPI from './components/PokemonAPI';

function App() {
  const [header, setHeader] = useState("");
  return (
    <>
      <Header title={header}/>

      <Nav>
        {[
          {href: "https://github.com/xtina-lt", title: "GitHub"},
          {href: "http://xtina.codes/", title: "Portfolio"}
        ]}
      </Nav>

      <main>
        {/* <Coin setHeader={setHeader}/> */}
        {/* <StarWars setHeader={setHeader}/> */}
        <PokemonAPI setHeader={setHeader}/>
      </main>
    </>
  );
}

export default App;
