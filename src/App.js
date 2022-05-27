import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import Timer from './Timer';
import Timer_lec from './Timer.lec';
import StopWatch from './StopWatch';

function App() {
  return (
    <div className="App">
      <Todo/>
      <hr/>
      <Timer/>
      <hr/>
      {/* <Timer_lec/> */}
      <StopWatch/>
    </div>
  );
}

export default App;
