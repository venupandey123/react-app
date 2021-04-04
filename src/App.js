import logo from './logo.svg';
import Calc from './components/Calc'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <h1 className="text-warning">React Calculator</h1>

         <Calc/>
         
      </header>
    </div>
  );
}

export default App;
