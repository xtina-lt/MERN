import React from 'react';
import './App.css';

const App = () => {
  const arr = ["Learn React", "Remove React Defaults", "Conquer the World"];
  let rand = Math.floor( Math.random() * arr.length );
  
  return (
      <body>
      
        <header>
            Hello React
        </header>
        
        <main>
            <div>
                <h2>
                  To Do:
                </h2>  
                <ul>
                  <li>
                    <span className="accent">
                      {arr[rand]}
                    </span>
                  </li>
                </ul>

                <img src="https://i.pinimg.com/originals/fa/dc/5a/fadc5a2c36277247fd92f8d50da179e9.gif" alt="puppers"></img>          
            </div>
            
            <div>
              <form action="/process" method="get">                                
                  <label htmlFor="email">Email:</label>                    
                  <input type="text" id="email" name="username" className="form-control" />     
                  <input type="submit" value="try me"/>                   
              </form>
            </div>
        </main>

      </body>
      );
    }

export default App
