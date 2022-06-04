import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
      </header>
      <section className='App-calculator'>
        <table>
          {/* for displaying input number */}
          <tr>
            <th><div className='App-calculator-input'>123</div></th>
          </tr>
          {/* for displaying result */}
          <tr>
            <th><div className='App-calculator-result'></div></th>
          </tr>
          {/* for displaying calculation history */}
          <tr>
            <th>
              <div className='App-calculator-inputHistory'>333</div>
            </th>
          </tr>
        </table>
      </section>
    </div>
  );
}

export default App;
