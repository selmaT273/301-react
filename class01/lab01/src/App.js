import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import beastData from './data.json';
import HornedBeast from './HornedBeast'
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hornedBeastsData: beastData
    }
  }

  render() {
    return (
      <>
      <Header />
      <Main data = {this.state.hornedBeastsData}/>
      <HornedBeast />
      <Footer />
    </>
    );
  }
}

export default App;
