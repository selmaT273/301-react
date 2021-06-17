import React, { useState } from 'react';

export default function HornedBeast(props) {
    const [count, setCount] = useState('');

    return (
        <>
        <h2>{props.title}</h2>
        <img onClick={() => setCount(count + '♥')} title={props.name} alt={props.name + "image"} src={props.imgUrl} />
        <p>{props.description}</p>
        <p>Your votes: {count}</p>
        </>
    );
}