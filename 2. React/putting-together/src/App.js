import React from 'react';
import './App.css';
import Quote from './components/Quote';
import Header from './components/Header'
import Person from './components/Person'

function App() {
  return (
    <>
    
      <Header title={"Putting Together"} />
      
      <main>
          <div className="quote-section">
              <Quote/>
          </div>

          <Person
            first = {"XTINA"}
            last = {".CODES"}
            experience = {"1 year"}
            lang = {"JavaScript"}
            icon = {"🦄"}>
          </Person>
      </main>

  </>
  );
}

export default App;
