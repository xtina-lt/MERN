import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Form from './components/Form'
import Display from './components/Display'

function App() {
  const [output, setOutput] = useState("");
  console.log(output);

  return (
    <>
      <Header title="Template"/>
      <Nav>
        {[
          {href: "https://github.com/xtina-lt", title: "GitHub"},
          {href: "http://xtina.codes/", title: "Portfolio"}
        ]}
      </Nav>

      <main>
        <Form output={output} setOutput={setOutput}/>
        <Display output={output} setOutput={setOutput}/>
      </main>
    </>
  );
}

export default App;
