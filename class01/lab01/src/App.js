import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import beastData from './data.json';
import SelectedBeast from './SelectedBeast';
import Form from 'react-bootstrap/Form';

class App extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      hornedBeastsData: beastData,
      show: false,
      beastClicked: {}
    }
  }

  handleShow = (beastTitle) => {
    const beastClicked = beastData.find(hornedBeast => hornedBeast.title === beastTitle);
    this.setState({
        show: true,
        beastClicked: beastClicked
    })
  }

  handleClose = () => {
    this.setState({
        show: false
    })
  }

  render() {
    return (
      <>
      <Header />
      <Form>
        <Form.Group controlId="dropdown">
          <Form.Label>Filter by # of Horns</Form.Label>
          <Form.Control as="select" custom>
            <option>Select a number</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Main 
        data={this.state.hornedBeastsData} 
        handleShow={this.handleShow}
      />
      <SelectedBeast 
        beastClicked={this.state.beastClicked} 
        show={this.state.show} 
        handleClose={this.handleClose}
      />
      <Footer />
    </>
    );
  }
}

export default App;
