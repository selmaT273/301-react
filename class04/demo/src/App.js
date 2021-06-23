import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'human'
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  }

  handleUsername = e => {
    if(e.target.value.length > 0){
      this.setState({
        username: e.target.value
      });
    } else {
      this.setState({
        username: 'human'
      })
    }
  }

  render(){
    return(
      <>
      <Header username={this.state.username}></Header>
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="bootstrap-name">
            <Form.Label>
              Name
            </Form.Label>
            <Form.Control type="text" onInput={this.handleUsername}/>
          </Form.Group>
          <Form.Group controlId="bootstrap-date">
            <Form.Label>
              Date
            </Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      </>
    )
  }
}

export default App;
