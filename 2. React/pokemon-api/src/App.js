import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
// import Coin from './components/Coin'
import StarWars from './components/StarWars';

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
        {/* <Coin header={header} setHeader={setHeader}/> */}
        <StarWars header={header} setHeader={setHeader}/>
      </main>
    </>
  );
}

export default App;
