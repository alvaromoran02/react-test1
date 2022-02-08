import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [ count, setCount ] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>{count}</h4>
        <button onClick={() => setCount(count + 1)}>
          Add
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </header>
    </div>
  );
}

export default App;
