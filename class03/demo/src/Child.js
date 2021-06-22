import React from 'react';
import data from './data.json';
class Child extends React.Component {

    //need an event handler to run when child asks for a macaron
    askForMacaron = () => {
        //child can send info up to the parent by using the function the parent passed down
        this.props.handleMacarons();
    }

    render(){
        let animalPics = data;
        console.log(animalPics);
        let picElements = animalPics.map((pic, index) => (
            <img
                src={pic}
                alt="horns"
                title="horns"
                width={150}
                key={index}
            />
        ))
        // using this.props allows us to access the props(in this case, an object) that we sent over from the parent
        return(
            <>
            <h3>I am the child and I have {this.props.aesonTotal} macarons now.</h3>
            <button onClick={this.askForMacaron}>Ask for a macaron</button>
            {picElements}
            </>
            // we can use this.EventHandler to refer to this instance of child that will be created
        );
    }
}

export default Child;