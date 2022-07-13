import './App.css';
import React, {useState} from 'react'
import Getter from './components/Getter'
import CreateForm from './components/Create'
import Find from './components/Find'
import FindOne from './components/FindOne'
import Yay from './components/Home'
import Catchall from './components/Catchall'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  const [header, setHeader] = useState("Zoo");
  const [data, setData] = useState([]);
  const [links, setLinks] = useState([{ href: "/", title: "Home" }, { href: "/getter", title: "Message" }, {href:'/animal/create', title:'Create'}, {href:'/animals', title: 'Animals'}])
  
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
          <Route path="/*" element={<Catchall setHeader={setHeader} />} />
          <Route exact path = '/' element={<Yay/>}/>
          <Route exact path='/getter' element={<Getter/>}/>
          <Route exact path='/animal/create' element={<CreateForm header={header} setHeader={setHeader}/>}/>
          <Route exact path="/animals" element={<Find header={header} setHeader={setHeader}/>}/>
          <Route exact path="/animal/:id" element={<FindOne header={header} setHeader={setHeader}/>}/>
        </Routes>
      </main>
      </BrowserRouter>
    </>
  );
}

export default App;
