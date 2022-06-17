import { Link } from 'react-router-dom';

function Suggestions(props) {
    return (
        <div className="options" style={{ background: "url(" + props.bg + ") no-repeat" }}>
            <h2>{props.text}</h2>
            <Link to='/search' />


        </div >
    );
}

export default Suggestions;