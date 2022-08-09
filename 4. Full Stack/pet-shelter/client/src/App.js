
import './App.css';
import React, {useState} from 'react'
/********** 
* ANIMALS *
***********/
import CreateForm from './components/animals/Create'
import Find from './components/animals/Find'
import FindOne from './components/animals/FindOne'
import UpdateOne from './components/animals/UpdateOne'
/********* 
*  SITE  *
**********/
import Catchall from './components/site/Catchall'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  /*************
   * VARIABLES *
   *************/
  const [subtitle, setSubtitle] = useState('')
  const [link, setLink] = useState({ href: "/", title: "Home" })

  /***********************
    *    USER INTERFACE   *
    **********************/
  return (
    <>
    <BrowserRouter>
      <header>
        <h1>
          Pet Shelter
        </h1>
        <a href={link.href}>
          {link.title}
        </a>
      </header>
      <nav>
        {subtitle}
      </nav>
      <main>
        <Routes>
          <Route path="/*" element={<Catchall/>}/>
          <Route exact path="/" element={<Find subtitle={subtitle} setSubtitle={setSubtitle} link={link} setLink={setLink} />}/>
          <Route exact path='/animal/new' element={<CreateForm subtitle={subtitle} setSubtitle={setSubtitle}/>}/>
          <Route exact path="/animal/:id" element={<FindOne subtitle={subtitle} setSubtitle={setSubtitle}/>}/>
          <Route exact path="/animal/:id/update" element={<UpdateOne subtitle={subtitle} setSubtitle={setSubtitle}/>}/>
        </Routes>
      </main>
      </BrowserRouter>
    </>
  );
}

export default App;
