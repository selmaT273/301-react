import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  }

  handleUsername = e => {
    this.setState({
      username: e.target.value
    });
  }

  render(){
    return(
      <>
      <Header username={this.state.username}></Header>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" onInput={this.handleUsername}/>
        <br />
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" name="dob" id="dob" />
        <br />
        <input type="submit" />
      </form>
      </>
    )
  }
}

export default App;
