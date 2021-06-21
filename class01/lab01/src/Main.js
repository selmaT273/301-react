import HornedBeast from './HornedBeast';
import hornedBeasts from './data';
import CardColumns from 'react-bootstrap/CardColumns';
import './main.css';
import React from 'react';

class Main extends React.Component {
    render() {
        let myBeasts = [];
        hornedBeasts.forEach(hornedBeast => {
            myBeasts.push(<HornedBeast key={hornedBeast.image_url} name={hornedBeast.name} title={hornedBeast.title} imgUrl={hornedBeast.image_url} description={hornedBeast.description} />)
        })
        return (
            <>
            <CardColumns className="card-columns">{myBeasts}</CardColumns>
            </>
        )
    }
}

export default Main;