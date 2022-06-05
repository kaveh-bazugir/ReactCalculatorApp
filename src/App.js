import logo from './logo.svg';
import './App.css';
import CalDisplay from './CalDisplay'
import MyNewDisplay from './myNewDisplay';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>calculator</h1>
        {/* <CalDisplay /> */}
        <Calculator />
      </header>
    </div>
  );
}


export default App;
