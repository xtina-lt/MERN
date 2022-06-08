import React from 'react';
import './App.css';
import Quote from './components/Quote';
import Header from './components/Header'
import Person from './components/Person'

function App() {
  let t = "Quote:";
  return (
    <body>
      
    <Header title={"Putting Together"} />
    
    <main>
        <div>
          <Quote 
            title = {t}
            desc = {"Life is a promise.. Fulfill it"}
            img = {"https://m.lovethispic.com/uploaded_images/blogs/Inspiring-Gif-Quotes-Of-The-Day-49125-2.gif"}
          />
        </div>
        <div>
          <Quote 
            title = {t}
            desc = {"Find a Reason to Smile"}
            img = {"https://i.gifer.com/KuhU.gif"}
          />
        </div>
        <div>
          <Quote 
            title = {t}
            desc = {"Be Addicted to Your Passion"}
            img = {"https://c.tenor.com/V62KtXdTJQQAAAAC/motivational-quotes.gif"}
          />
        </div>
        <Person
          first = {"XTINA"}
          last = {".CODES"}
          experience = {"1 year"}
          lang = {"JavaScript"}
          icon = {"🦄"}
        />
    </main>

  </body>
  );
}

export default App;
