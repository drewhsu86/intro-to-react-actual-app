import './App.css';
import HelloWorld from './components/HelloWorld'
import HelloSpecified from './components/HelloSpecified'
import HelloForm from './components/HelloForm'
import Login from './login/Login'
import './components/HelloWorld.css'

function App() {
  return (
    <div className="App">
      {/* <HelloWorld />
      <HelloSpecified addressee={"Bob"} />
      <HelloForm addressee={"Bob"} /> */}

      <Login />
    </div>
  );
}

export default App;
