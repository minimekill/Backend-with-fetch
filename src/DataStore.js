
import React from 'react'

export default class Books extends React.Component {
    constructor(){
        super()
        this.state = ({
            _books = []
            



        })
        this.getAllBooks = this.getAllBooks.bind(this)

        
    }
    getAllBooks(){
        
        fetch('http://localhost:4000/books',{method: 'GET'})
        .then(function(response){
          
            return response.json();
        })
        .then(function(data){
            console.log(data[2].id)
            books = data
            console.log("length is 1 : " + books.length)
            return books
            
        })
        .catch(function(e){
            console.log(e)
          return "error"
        })
    }
}