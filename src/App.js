/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/

/* third!
import person from "./dataStore2";
const {firstName,email} = person.firstName + " " + person.email;
export default {firstName,email};
*/

import React from 'react'
import Books from './DataStore'

export default class App extends React.Component{
  constructor( ){
  super()
   
    this.test = this.test.bind(this)
}
test(){
  console.log("app: " + this.booksClass.getAllBooks().length)
}


render(){
  //console.log("hejjj " + this.booksClass.getAllBooks.length)
  return(<div>
    <Books/>

  </div>
    //<div>{books.getAllBooks() + "here"}</div>
  )
}

}

