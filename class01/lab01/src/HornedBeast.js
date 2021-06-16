function HornedBeast(props) {
    return (
        <>
        <h2 className="title">{props.title}</h2>
        <img className="imageUrl" src={props.image_url} alt="" title="" />
        <p className="description">{props.description}</p>
        </>
    );
}

export default HornedBeast;