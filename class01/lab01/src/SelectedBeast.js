import React from 'react';

class SelectedBeast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }
    
    render(){
        return(
            <>
            </>
        );
    }
}

export default SelectedBeast;