import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

const OPERATIONS = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT"
};

function App() {
  const [number, updateNumber] = React.useState(0);

  const [state, dispatch] = React.useReducer((state, action) => {
    /* implement the reducer which should update the state based on the action */
    switch (action.type) {
      case "ADD":
        return parseInt(state) + parseInt(action.value)
      case "SUBTRACT":
        return parseInt(state) - parseInt(action.value)
      default:
        break;
    }
    return state;
  }, 0);

  /* implement dispatches */
  const add = () => dispatch({type: OPERATIONS.ADD, value: number});
  const subtract = () => dispatch({type: OPERATIONS.SUBTRACT, value: number});

  const handleNumberChange = e => updateNumber(Number(e.target.value));

  return (
    <div>
      <div id="result">{state}</div>
      <div>
        <button id="add" onClick={add}>Add</button>
        <button id="subtract" onClick={subtract}>Subtract</button>
      </div>
      <div>
        <input type="text" value={number} onChange={handleNumberChange} />
      </div>
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
