import React, { useState } from 'react';

export default function HornedBeast(props) {
    const [count, setCount] = useState(0);

    return (
        <>
        <h2>{props.title}</h2>
        <img onClick={() => setCount(count + 1)} title={props.name} alt={props.name + "image"} src={props.imgUrl} />
        <p>{props.description}</p>
        <p>You voted for this {count} times</p>
        </>
    );
}