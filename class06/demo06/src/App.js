import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {

  handleFetch = async() => {
    console.log('that is so fetch!');
    // await resolves the promise that axios returns, so that we can assign it to a variable
    let data = await axios.get('https://swapi.dev/api/people/1/');
    console.log(data);
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
