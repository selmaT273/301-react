import HornedBeast from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';
import './main.css';
import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <>
            <CardColumns className="card-columns">
                {this.props.data.map((hornedBeast) => (<HornedBeast 
                    key={hornedBeast.image_url} 
                    name={hornedBeast.name} 
                    title={hornedBeast.title} 
                    imgUrl={hornedBeast.image_url} 
                    description={hornedBeast.description} />)
                )}
            </CardColumns>
            </>
        )
    }
}

export default Main;
