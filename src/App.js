import logo from './logo.svg';
import './App.css';
import {CalDisplay} from './calculatorFunctions'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>calculator</h1>
      </header>
      <div>
        <p>{myresult}</p>
      </div>
      <div>
        <button onClick={Increament}>+</button>
        <button>y</button>
      </div>
    </div>
  );
}
let myresult = 0;
function Increament() {
  myresult+=1;
  return {MyDisplay}
}
function MyDisplay() {
  return <p>{myresult}</p>;
}

export default App;
