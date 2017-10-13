const URL = "http://localhost:4000/books"
export default class DataStore {



    constructor() {
        this.books = []
        this.loadData = this.loadData.bind(this)
        this.getBooks = this.getBooks.bind(this)
        this.createBook = this.createBook.bind(this)
    }
    loadData(callback) {
        fetch(URL, { Method: 'GET' })
            .then(function (response) {
                return response.json()
            })
            .then(function(data){
                console.log(data.length)
                callback(data)
            })

    }
    getBooks(){
        return this.books
    }


    createBook(book, callback){
        fetch(URL,
            {
                method: 'POST',
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(book)
            })
            .then(function(response){
               return response.json()
            })
            .then( () => this.loadData(callback))
                
            


        
    }
}