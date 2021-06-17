import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';

export default function HornedBeast(props) {
    const [count, setCount] = useState('');

    const imageClicked = () => {
        setCount(count + '♥');
    }

    return (
        <>
        <h2>{props.title}</h2>
        <Image onClick={imageClicked} title={props.name} alt={props.name + "image"} src={props.imgUrl} roundedCircle/>
        <p>{props.description}</p>
        <p>Your votes: {count}</p>
        </>
    );
}