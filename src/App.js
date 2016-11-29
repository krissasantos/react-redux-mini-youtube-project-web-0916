import React, { Component } from 'react';
import { fetchVideos } from './actions'
import mainVideoComponent from './mainVideoComponent';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.getTerm = this.getTerm.bind(this)
  }

  getTerm(event){
    let term = ''
    event.preventDefault();
    term = event.target.searchTerm.value // adele
    fetchVideos(term)
    
  }

  render() {
    return (
      <div className="App">

        <form onSubmit={this.getTerm}>
         <input type='text' name='searchTerm'/>
         <input type='submit' value='Search Youtube'/>
        </form>

        <mainVideoComponent />

      </div>
    );
  }




}

export default App;
