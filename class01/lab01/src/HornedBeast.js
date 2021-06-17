import React, { useState } from 'react';

export default function HornedBeast(props) {
    const [count, setCount] = useState('');
    
    const imageClicked = () => {
        setCount(count + '♥');
    }

    return (
        <>
        <h2>{props.title}</h2>
        <img onClick={imageClicked} title={props.name} alt={props.name + "image"} src={props.imgUrl} />
        <p>{props.description}</p>
        <p>Your votes: {count}</p>
        </>
    );
}