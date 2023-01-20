import logo from './logo.svg';
import './App.css';

function App() {
  const a = 123
  const b = 234
  let c = a + b
  const d = [a, b, c]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Web Dev CS5610 Section 6.
        </p>
        <p>
          a = {a}
          <br/>
          b = {b}
        <br/>
          c = {c}
          <br/>
          d = {d}
          <ul>
            <li>{d[0]}</li>
            <li>{d[1]}</li>
            <li>{d[2]}</li>
          </ul>
          <ol>
            {d.map(item => <li>{item}</li>)}
          </ol>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
