function HornedBeast(props) {
    return (
        <>
        <h2>{props.title}</h2>
        <img title={props.name} alt={props.name + "image"} src={props.imgUrl} />
        <p>{props.description}</p>
        </>
    );
}

export default HornedBeast;