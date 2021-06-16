import './CoolCoffee.css';
function CoolCoffee(props) {
    return (
        <div className="cool-coffee">
            <span className="prompt">How cool do you want your coffee to be?</span>
            <span className="number">{props.number}</span>
        </div>
    );
}

export default CoolCoffee;