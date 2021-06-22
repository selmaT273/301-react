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

    // this is being passed to child in the <Child /> component down in the return
    giveMacaron = () => {
        // change state with this.setState then pass in the properties that should be changed
        this.setState({
            myMacarons: this.state.myMacarons - 1,
            aesonsMacarons: this.state.aesonsMacarons + 1
        })
    }

    // display whatever state currently is at with {this.state.STATEVAR}
    render(){
        return(
            <>
            <h2>A + P's parent</h2>
            <p>I have {this.state.myMacarons} macarons left</p>
            <Child 
                aesonTotal={this.state.aesonsMacarons} 
                handleMacarons={this.giveMacaron}
            />
            </>
            // pass aesonsMacarons to child component via props
        )
    }
}

export default Parent;

// since we're passing a function from the parent to the child, we'll want to create state in parent