import React from 'react';

class Child extends React.Component {

    //need an event handler to run when child asks for a macaron
    giveMacaron = () => {
        console.log('give a macaron');
    }

    render(){
        // using this.props allows us to access the props(in this case, an object) that we sent over from the parent
        console.log('child props', this.props);
        return(
            <>
            <h3>I am the child and I have {this.props.aMacarons} macarons now.</h3>
            <button onClick={this.giveMacaron}>Ask for a macaron</button>
            </>
            // we can use this.EventHandler to refer to this instance of child that will be created
        );
    }
}

export default Child;