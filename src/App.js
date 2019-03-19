import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import gradients from './data/data'

class App extends Component {
  renderList(){
    return gradients.map((item) => {
     return  <Card
              colorOne = {item[0]}
              colorTwo = {item[1]}
              />
    }) 
  }
  
  render() {
    return (
      <div className="card-outside">
        {this.renderList()}
      </div>
    );
  }
}

export default App;
