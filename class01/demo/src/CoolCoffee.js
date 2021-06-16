import './CoolCoffee.css';
function CoolCoffee(props) {
    return (
        <div className="cool-coffee">
            <span className="prompt">{props.prompt}</span>
            <span className="number">{props.number}</span>
        </div>
    );
}

export default CoolCoffee;