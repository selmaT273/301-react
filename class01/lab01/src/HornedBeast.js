import React from 'react';
import Card from 'react-bootstrap/Card';
import './hornedBeast.css'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: ''
        }
    }

    imageClicked = () => {
        this.setState({
            count: this.state.count + '♥'
        });
    }

    render() {
        return (
            <Card className="card" bg="light" style={{ width: '18rem'}}>
                <Card.Header>
                    {this.props.title}
                    <Card.Subtitle className="mb-2 text-muted">
                        {this.props.description}
                    </Card.Subtitle>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Your votes: {this.state.count}
                    </Card.Text>
                    <Card.Img
                        onClick={this.imageClicked} 
                        title={this.props.name} 
                        alt={this.props.name + "image"} 
                        src={this.props.imgUrl}
                    />
                </Card.Body> 
            </Card>
        );
    }
}

export default HornedBeast;