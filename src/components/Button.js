import PropTypes from 'prop-types';//impt+enter

export const Button = ({ color, text, clickHndlr }) => {

  return <button onClick={clickHndlr} className="btn" style={{ backgroundColor: color }}>{text}</button>
}

//defaultProps for setting default values for properties has no value sent
Button.defaultProps = {
  color: 'steelblue',
}

//propTypes for setting data types for properties
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;
