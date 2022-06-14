import './App.css';
import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Select from './components/Select';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import SubContent from './components/SubContent'
import Form from './components/Form'

function App() {

  const arr = [
    {label : "Coding", content : "Conquer the world!"},
    {label : "Garden", content: "Get off the computer... Water Plants!"},
    {label: "Read", content: "Get off the computer.. Open a book!"},
    {label : "Cook", content: "Get off the computer.. Find a new Plant Based recipe!"}
  ]
  const [ all, setAll ] = useState(arr);
  const [ current, setCurrent ] = useState(0);

  return (
    <>
    
      <Header title="Practice"/>

      <Nav>
        { {name : "Creator", url : "//xtina.codes"} }
        { {name : "Git", url : "https://github.com/xtina-lt/MERN/"} }
      </Nav>

      <Main>
        <SubContent>
          Hello
        </SubContent>
        <SubContent>
          World
        </SubContent>
        <Form/>

        <SubContent>
          <Tabs 
            all={ all } 
            current={ current }
            setCurrent={ setCurrent } 
          />
          <Select all={ all } current={ current } />
        </SubContent>

      </Main>

    </>
  );
}

export default App;
