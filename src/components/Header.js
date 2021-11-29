import PropTypes from 'prop-types';
import Button from './Button';

// Props is destrctured since it's an object
function Header({title, onAdd}) {
    return (
        <header className="header">
            <h1>
                {title}
            </h1>
            <Button color="green" text="Add" onClick={onAdd} />
        </header>
    )
}

// Set a Title "Task Tracker" by Default
Header.defaultProps = {
    title: "Task Tracker"
}

// Define the type of the Props for better code stability
Header.propTypes = {
    title: PropTypes.string.isRequired
}

// Define Header Style ( CSS in Js)
// const headerStyle = {
//     color: "red",
//     backgroundColor: "black",
//     display: "inline-block"
// }

export default Header;
