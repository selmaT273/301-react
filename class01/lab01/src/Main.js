import HornedBeast from './HornedBeast';
import hornedBeasts from './data';
import CardColumns from 'react-bootstrap/CardColumns';
import './main.css';

export default function Main() {
    let myBeasts = [];
    hornedBeasts.forEach(hornedBeast => {
        myBeasts.push(<HornedBeast key={hornedBeast.image_url} name={hornedBeast.name} title={hornedBeast.title} imgUrl={hornedBeast.image_url} description={hornedBeast.description} />)
    })
    return (
        <CardColumns className="card-columns">{myBeasts}</CardColumns>
    )
}