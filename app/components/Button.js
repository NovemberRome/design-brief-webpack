import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({onClick, children}) => (
  <button className={styles.button} onClick={onClick}>{children}</button>
);
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node)
        , PropTypes.node
    ]).isRequired
}

export default Button;
