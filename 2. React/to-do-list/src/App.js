import './App.css';
import React, {useState} from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Display from './components/Display'
// MESSAGE PROJECT
// import MessegeForm from './components/MessegeForm'
// import MessageDisplay from './components/MessageDisplay'

function App() {
  // MESSAGE PROJECT
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

        {/* MESSAGE PROJECT */}
        {/* <MessegeForm fx={ youveGotMail }/>
        <MessageDisplay message={current}/> */}

        {/* use key={list.id} when you evolve and use id's */}
        <Form list={list} setList={setList} />

        <Display list={list} setList={setList}/>
      </main>
    </>
  );
}

export default App;
