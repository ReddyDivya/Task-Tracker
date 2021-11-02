import PropTypes from 'prop-types';
//import { useLocation } from 'react-router-dom';
import Button from './Button'

const Header = ({ title, onAddOrClose, showAdd }) => {

  /*  Note: handleClick() - This is click handler for Button.js because component is embeded in header.js
        even, if same function handled in Button.js(child) also,it's going to call function in
        header.js (which is a parent component)
  */
  //const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {/*
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          clickHndlr={onAddOrClose}
        />
      )}
      */}
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        clickHndlr={onAddOrClose}
      />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header