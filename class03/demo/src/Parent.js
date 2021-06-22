import React from 'react';
import Child from './Child';

class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            myMacarons: 30,
            aesonsMacarons: 0
        }
    }
    // display whatever state currently is at with {this.state.STATEVAR}
    render(){
        return(
            <>
            <h2>A + P's parent</h2>
            <p>I have {this.state.myMacarons} macarons left</p>
            <Child aMacarons={this.state.aesonsMacarons}/>
            </>
            // pass aesonsMacarons to child component via props
        )
    }
}

export default Parent;

// since we're passing a function from the parent to the child, we'll want to create state in parent