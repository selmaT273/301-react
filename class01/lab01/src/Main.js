import HornedBeast from './HornedBeast';
import hornedBeasts from './data';

function Main() {
    let myBeasts = [];
    hornedBeasts.forEach(hornedBeast => {
        myBeasts.push(<HornedBeast name={hornedBeast.name} title={hornedBeast.title} imgUrl={hornedBeast.image_url} description={hornedBeast.description} />)
    })
    return (
        <main>
           {myBeasts} 
        </main>
    )
}

export default Main;