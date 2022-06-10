import './App.css';
import Header from './components/Header'
import UserForm from './components/UserForm'

function App() {
  return (
    <>
      <Header title="Form Play"/>
      <main>
        <div className=''>
          <UserForm/>
        </div>
      </main>
    </>
  );
}

export default App;
