import React, { useState } from 'react';
import './App.css';
import Home from './components/site/Home'
import Catchall from './components/site/Catchall'
import Form from './components/madlibs/Form.js'
import Results from './components/madlibs/Results.js'
import Assignment from './components/practice/Assignment'
import Location from './components/practice/Location'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  const [header, setHeader] = useState("Yolo");
  const [data, setData] = useState([]);
  const [links, setLinks] = useState([{ href: "/", title: "Home" }, { href: "/form", title: "MadLibs" }])

  return (
    <BrowserRouter>
      <header>
        {header}
      </header>

      <nav>
        {links.map((e,i)=>
          // eslint-disable-next-line
          <NavLink key={i} to={e.href}>
              {e.title}
          </NavLink> 
        )} 
      </nav>

      <main>
        {/* ROUTES */}
        <Routes>
          {/* catchall */}
          <Route path="/*" element={<Catchall setHeader={setHeader} />} />
          {/* home */}
          <Route exact path="/" element={<Home setHeader={setHeader} />} />
          {/* madlib form */}
          <Route exact path="/form" element={
            <Form
              setHeader={setHeader}
              data={data}
              setData={setData} />
          } />
          {/* result of madlib */}
          <Route exact path="/results" element={
            <Results
              setHeader={setHeader}
              data={data}
            />
          } />
          {/* city */}
          <Route path="/location/:city/:num" element={
            <Location setHeader={setHeader} />
          } />
          {/* ASSIGNMENT */}
          <Route path="/assignment/:x/:color" element={
            <Assignment setHeader={setHeader} />
          } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App



