// write button card here
import React from 'react';

// The Button component accepts a label prop to dynamically display the text.
const Button = ({ label }) => {
  return (
    <button style={styles.button}>
      {label}
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
};

export default Button;