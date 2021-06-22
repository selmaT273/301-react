import React from 'react';

class Child extends React.Component {
    render(){
        // using this.props allows us to access the props(in this case, an object) that we sent over from the parent
        console.log('child props', this.props);
        return(
            <>
            <h3>I am the child and I have {this.props.aMacarons} macarons now.</h3>
            </>
        );
    }
}

export default Child;