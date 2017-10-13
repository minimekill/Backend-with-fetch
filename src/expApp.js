import React from 'react'
import DataStore from './expDataStore'

//const dataStore = new DataStore()

export default class ExpApp extends React.Component {
    constructor() {
        super()
        this.showCase = []
        this._books = new DataStore()
        this.state = {
            _data: [],
            _inputValue: "insert id"

        }
        
        /*
        this._books.loadData(function(data){
            const _data = data
            this.setState({_data})
        }.bind(this))
        */
        this.createBook = this.createBook.bind(this)
        this.findBook = this.findBook.bind(this)
        this.updateInput = this.updateInput.bind(this)
        this.updateAchive = this.updateAchive.bind(this)
        this.updateAchive()
    }
    createBook(){
        const book = {
            "title": "min bog",
            "author": "peter",
            "rating": 2.25,
            "year_published": 2017
        }
        this._books.createBook(book, (data)=>{this.setState({_data: data})})
    }
    updateAchive(){
        this._books.loadData(function(data){
            const _data = data
            this.setState({_data})
        }.bind(this))
        console.log("after update: " + this.state._data.length)
    }
    findBook(){
        
        
        let data = []
        this.state._data.forEach((e) => { if(e.id==this.state._inputValue){data.push(e)} })
        this.setState({_data: data})
        
    }
    updateInput(event){
        this.setState({
            _inputValue: event.target.value
        })
    }

    render() {
        
         this.showCase = this.state._data.map(function(e){return <p key={e.id}> {e.id}  </p>} )
        //console.log("hellooo: " + stuff.length)
        console.log("hellooo2: " + this.state._data.length)
        return (
            
            <div>
                <button onClick={this.findBook}> find </button> <input value={this.state._inputValue} onChange={this.updateInput} type="text"/><br></br>
                <button onClick={this.createBook}> create </button>             
                {this.showCase}
                



            </div>
        )
    }

}