
import './App.css';
import React, {useState} from 'react'
import Home from './components/site/Home'
import Catchall from './components/site/Catchall'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Books from './components/books/Books';
import Book from './components/books/Book';

function App() {
  /*************
   * VARIABLES *
   *************/
  const [header, setHeader] = useState("Bookshelf");
  const [links, setLinks] = useState([{ href: "/", title: "Home" }, {href:'/books', title: 'Books'}])
  
  /***********************
    *    USER INTERFACE   *
    **********************/
  return (
    <>
    <BrowserRouter>
      <header>
        {header}
      </header>
      <nav>
        {links.map((e,i)=>
          // eslint-disable-next-line
          <a key={i} href={e.href}>
              {e.title}
          </a> 
        )} 
      </nav>
      <main>
        <Routes>
          <Route path="/*" element={<Catchall header={header} setHeader={setHeader}/>} />
          <Route exact path = '/' element={<Home/>}/>
          <Route exact path="/books" element={<Books/>}/>
          <Route exact path="/book/:id/" element={<Book/>}/>
        </Routes>
      </main>
      </BrowserRouter>
    </>
  );
}

export default App;
