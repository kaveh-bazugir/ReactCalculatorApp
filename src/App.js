import logo from './logo.svg';
import './App.css';
import {Increament} from './calculatorFunctions'
import MyNewDisplay from './myNewDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>calculator</h1>
      </header>
      <div>
        <Increament />
      </div>
      <div>
        <button onClick={Increament}>+</button>
      </div>
    </div>
  );
}


export default App;
