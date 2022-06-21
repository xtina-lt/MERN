import './App.css';
import React, {useState} from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Display from './components/Display'
// import Parent from './components/Parent'
// import Groceries from './components/Groceries'
// import MessegeForm from './components/MessegeForm'
// import MessageDisplay from './components/MessageDisplay'

function App() {
  // MESSAGE
  // const [current, setCurrent] = useState("There are none")
  // const youveGotMail = e => {setCurrent(e);}

  // TO DO LIST 
  const arr = [
    {content: 'conquer world', complete : false},
    {content: 'be amazing', complete: false}];
  const [list, setList] = useState(arr);

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

        {/* <MessegeForm fx={ youveGotMail }/>
        <MessageDisplay message={current}/> */}

        <Form list={list} setList={setList} />

        <Display list={list} setList={setList}/>
      </main>
    </>
  );
}

export default App;
