import './App.css';
import React, {useState} from 'react'
// import Getter from './components/Getter'
import CreateForm from './components/CreateForm'

function App() {

  const [header, setHeader] = useState("Zoo");
  const [data, setData] = useState([]);
  const [links, setLinks] = useState([{ href: "/", title: "Home" }, { href: "https://github.com/xtina-lt", title: "Github" }])
  
  return (
    <>
      <header>
        {header}
      </header>

      <nav>
        {links.map((e,i)=>
          // eslint-disable-next-line
          <a key={i} href={e.href} target='_blank'>
              {e.title}
          </a> 
        )} 
      </nav>

      <main>
        {/* <Getter/> */}
        <CreateForm header={header} setHeader={setHeader}/>
      </main>
    </>
  );
}

export default App;
