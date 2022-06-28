
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home'
import Catchall from './components/Catchall'
import PersonForm from './components/PersoneForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [header, setHeader] = useState("Hello Full Stack");
  const [links, setLinks] = useState([{ href: "/", title: "Home" }, { href: "https://github.com/xtina-lt", title: "Github" }, { href: "http://xtina.codes", title: "Portfolio" }])
  const [data, setData] = useState([]);

  return (
    <>
    <header>
      {header}
    </header>

    <nav>
        {links.map((e,i)=>
          <a href={e.href} key={i} target="_blank">
              {e.title}
          </a> 
        )} 
    </nav>

    <main>
      <PersonForm/>
    </main>
    </>
  );
}

export default App
