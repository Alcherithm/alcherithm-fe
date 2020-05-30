import React from 'react';
import PropTypes from 'prop-types';
import styles from './buttons.css';
import sizes from './sizes.css';
import colors from '../../styles/colors.css';

// use children for text so your button component behaves more like the button element
// use rest to get other props like onClick
const Button = ({
  children,
  buttonStyle,
  buttonSize,
  backgroundColor,
  ...rest
 }) => <button {...rest} className={`${styles[buttonStyle]} ${sizes[buttonSize]} ${colors[backgroundColor]}`} onClick={onClick}>{children}</button>;

Button.propTypes = {
  buttonStyle: PropTypes.string,
  buttonSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
