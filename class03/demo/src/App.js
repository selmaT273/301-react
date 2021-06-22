import React from 'react';
import Parent from './Parent';
import Card from 'react-bootstrap/Card';
class App extends React.Component {
  render(){
    return(
      <>
      <h1>This is App</h1>
      <Card style={{ display: 'inline-block' }}>
        <Card.Img variant="top" src="http://placehold.it/500x100/444" />
      </Card>
      <Parent />
      </>
    )
  }
}

export default App;
