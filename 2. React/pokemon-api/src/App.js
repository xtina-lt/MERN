import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Coin from './components/Coin'

function App() {
  return (
    <>
      <Header title="Pokemon Api"/>

      <Nav>
        {[
          {href: "https://github.com/xtina-lt", title: "GitHub"},
          {href: "http://xtina.codes/", title: "Portfolio"}
        ]}
      </Nav>

      <main>
        <Coin/>

      </main>
    </>
  );
}

export default App;
