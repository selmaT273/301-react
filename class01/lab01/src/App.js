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
      beastClicked: {},
      numberClicked: 0
    }
  }

  handleShow = (beastTitle) => {
    const beastClicked = beastData.find(hornedBeast => hornedBeast.title === beastTitle);
    this.setState({
        show: true,
        beastClicked: beastClicked
    });
  }

  handleClose = () => {
    this.setState({
        show: false
    });
  }

  handleForm = e => {
    e.preventDefault();
    const numberOfHorns = parseInt(e.target.value);
    const matchingHorns = beastData.filter(hornedBeast => hornedBeast.horns === numberOfHorns);
    if(numberOfHorns === 0){
      this.setState({
        hornedBeastsData: beastData
      })
    } else {
      this.setState({
        numberClicked: numberOfHorns,
        hornedBeastsData: matchingHorns
      })
    } 
  }

  render() {
    return (
      <>
      <Header />
      <Form>
        <Form.Group controlId="dropdown">
          <Form.Label>Filter by # of Horns</Form.Label>
          <Form.Control as="select" onChange={this.handleForm} custom>
            <option value="0">Select a number</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
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
