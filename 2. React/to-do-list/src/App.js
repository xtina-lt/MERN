import './App.css';
import React, {useState} from 'react'
import Header from './components/Header'
// import Parent from './components/Parent'
// import Groceries from './components/Groceries'
import MessegeForm from './components/MessegeForm'
import MessageDisplay from './components/MessageDisplay'

function App() {
  const [current, setCurrent] = useState("There are none")

  const youveGotMail = (e) => {setCurrent(e);}
  return (
    <>
      <Header title="Header Prop"/>

      <main>
        {/* <Parent title="---Component---">
          <span>- I am a child</span>
          <span>- & I....</span>
          <span>- && me!!</span>
        </Parent> */}

        {/* <Groceries/> */}

        <MessegeForm fx={ youveGotMail }/>
        <MessageDisplay message={current}/>

      </main>
    </>
  );
}

export default App;
