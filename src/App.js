import logo from './Logo.svg';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        {/* Display Home component */}
        <Home /> 
      </div>
    </div>
  );
}

export default App;
