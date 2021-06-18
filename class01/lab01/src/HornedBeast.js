import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

export default function HornedBeast(props) {
    const [count, setCount] = useState('');

    const imageClicked = () => {
        setCount(count + '♥');
    }

    return (
        <Card bg="light" style={{ width: '18rem'}}>
            <Card.Header>
                {props.title}
                <Card.Subtitle className="mb-2 text-muted">{props.description}</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Card.Text>Your votes: {count}</Card.Text>
                <Card.Img onClick={imageClicked} title={props.name} alt={props.name + "image"} src={props.imgUrl}/>
            </Card.Body> 
           
        </Card>
    );
}