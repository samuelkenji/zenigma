import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

/* const Cards = (props) => {
  const amount = props.amount
  let cards = []
  for(let i = 0; i < amount; i++){
    cards.push(<td className='card' style={{border:'solid black 1px', width:'50px', height:'100px', display:'flex', alignItems:'center', justifyContent:'center', margin:'15px'}}>down</td>)
  }
  let table = <table><tbody><tr style={{display:'flex'}}>{cards}</tr></tbody></table>

  return table;
};

document.body.innerHTML = "<div id='root'> </div>";
  
const rootElement = document.getElementById("root");
ReactDOM.render(<Cards amount={4} />, rootElement);

function turn(e){
  let state = e.target.innerText;
  if(state === 'up'){ return }

  let newState;
  if(state === 'down'){
    newState = 'up'
  }else{
    newState = 'down'
  }

  let renderedCards = document.getElementsByTagName("td");
  for(let i = 0; i < renderedCards.length; i++){
    console.log(renderedCards[i])
    if(renderedCards[i] !== e.target && renderedCards[i].innerText === newState){
      return
    }
  }

  e.target.innerText = newState;

}

let row = document.getElementById("root").getElementsByTagName("tr")[0];

let renderedCards = document.getElementsByTagName("td");
console.log(renderedCards)
for(let i = 0; i < renderedCards.length; i++){
  console.log(renderedCards[i])
  renderedCards[i].addEventListener('click', turn)
}

if(row) {
  let cell = row.getElementsByTagName("td")[1];
  if(cell) {
    cell.click();
  }
}
setTimeout(() => console.log(document.getElementById("root").innerHTML)); */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
