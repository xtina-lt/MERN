import './App.css';
import React, {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Catchall from './components/site/Catchall';
import Home from './components/site/Home';
import LoginOReg from './components/site/LoginOReg';
import Dashboard from './components/site/Dashboard'
import Header from './components/site/Header';
import Nav from './components/site/Nav';

function App() {
  const [header, setHeader] = useState('XTINA.CODES')
  return (
    <>
    <Header header={header}/>
    <Nav/>
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Catchall setHeader={setHeader}/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<LoginOReg/>}/>
          <Route exact path='/dash/:id' element={<Dashboard setHeader={setHeader}/>} />
        </Routes>
      </BrowserRouter>
    </main>
    </>
  )
}

export default App;
