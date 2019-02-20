import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import GoogleBook from './googleBook'

class App extends Component {
  constructor () {
    super()
    this.state = {
      username:'',
      qTerm:'Batman',
      books:[],
    }
    
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('Success!')
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+ this.state.qTerm)
    .then(response => this.setState({books: response.data.items}))
  }

  render() {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click me</button>
        {this.state.books.map((item) =>
          <GoogleBook item={item} />
          )}
      </div>
    );
  }
}
export default App