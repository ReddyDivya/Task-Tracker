import PropTypes from 'prop-types';//impt+enter
import { useLocation } from 'react-router-dom';
import Button from './Button';

function Header({ title, onAdd, showAdd })//{title} is a detructuring object
{
    /*  handleClick() - This is click handler for Button.js because component is embeded in header.js
        even, if same function handled in Button.js(child) also,it's going to call function in
        header.js (which is a parent component)
    */

    const location = useLocation();
    return (
        <header>
            <h1>{title}</h1>
            {
                location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} clickHndlr={onAdd} />
            }
        </header>
    )
}

//styling using an object(alse known as CSS in JS)
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'yellow'
// }

//default properties
Header.defaultProps = {
    title: 'Task Tracker'
}

//propTypes
Header.propTypes = {
    title: PropTypes.string.isRequired, //set title prop to string type only, otherwise error is thrown 
}

export default Header;


