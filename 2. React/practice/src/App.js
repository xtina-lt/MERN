import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import SubContent from './components/SubContent'
import Form from './components/Form'

function App() {

  return (
    <>
    
      <Header title="Practice"/>

      <Nav links={[
        {name : "Creator", url : "//xtina.codes" },
        {name : "Git", url : "https://github.com/xtina-lt/MERN/"}
      ]}/>

      <Main e = {[
          <SubContent e="Test"/>,
          <SubContent e="Lets"/>,
          <SubContent e="Go"/>
        ]}
      />

    </>
  );
}

export default App;
