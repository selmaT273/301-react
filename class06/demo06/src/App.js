import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {

  handleFetch = () => {
    console.log('that is so fetch!');
  }

  render(){

    return(
      <>
      <h1 onClick={this.handleFetch}>hellllllloooo</h1>
      </>
    )
  }
}

export default App;
