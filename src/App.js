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
          <tr className='App-calculator-inputBox'></tr>
          {/* for displaying result */}
          <tr className='App-calculator-outputBox'></tr>
          {/* for displaying calculation history */}
          <tr calssName='App-calculator-processBox'></tr>
        </table>
      </section>
    </div>
  );
}

export default App;
