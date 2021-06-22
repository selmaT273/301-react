import React from 'react';
import Parent from './Parent';
import Card from 'react-bootstrap/Card';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'none',
      src: ''
    }
  }

  // this is our event handler, we need to pass in the pic as a parameter
  showSelectedPic = (pic) => {
    this.setState({
      display: 'inline-block',
      src: pic
    })
  }

  render(){
    return(
      <>
      <h1>This is App</h1>
      <Card style={{ display: this.state.display }}>
        <Card.Img variant="top" src={this.state.src} />
      </Card>
      <Parent sendPic={this.showSelectedPic}/>
      </>
    )
  }
}

export default App;
