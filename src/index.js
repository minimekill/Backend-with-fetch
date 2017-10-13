/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

/* fi´rst assignment how to print array, why do we bind it ??
import Cars from './Cars';
const app = document.getElementById("root");
const cars = new Cars();
let setup = cars.getAllCars.array.forEach(function(element) {
    element
}, this);

app.innerHTML = "<div>" + setup + "</div>";
*/
/*second solved
import upper, {text3} from "./ES6features";
const app = document.getElementById("root");
app.innerHTML = "<div>"+text3+"</div>";
*/
/* third  undefined ???
import stuff from "./App";
console.log(stuff);
*/

/* forth solved  arrow
["peter","hanne","penang","hakim"].map(function(e){return `${e} er en person`});
["peter","hanne","penang","hakim"].map(e=>{return `${e} er en person`});
const app = document.getElementById("root");
app.innerHTML = ["peter","hanne","penang","hakim"].map(e=>{return `${e} er en person`});
*/


import React from 'react';
import ReactDOM from 'react-dom';
import App from './expApp';




ReactDOM.render(<App/>,document.getElementById("root"))