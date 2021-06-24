import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      director: ''
    }
  }

  handleFetch = async() => {
    console.log('that is so fetch!');
    // await resolves the promise that axios returns, so that we can assign it to a variable
    let data = await axios.get('https://swapi.dev/api/people/1/');
    // practicing accessing the films inside of the data object
    let filmData = await axios.get(data.data.films[0]);
    this.setState({
      title: filmData.data.title,
      director: filmData.data.director
    })
  }

  render(){
    return(
      <>
      <h1 onClick={this.handleFetch}>hellllllloooo</h1>
      <h2>The movie {this.state.title} was directed by {this.state.director}</h2>
      </>
    )
  }
}

export default App;
