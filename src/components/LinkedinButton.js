import React from 'react';
import Button from 'react-bootstrap/Button';

function LinkedinButton() {
  const buttonStyle = {
    width: '40px', // Adjust the size as needed
    height: '40px', // Adjust the size as needed
    borderRadius: '50%', // Make it circular
    padding: '0', // Remove padding
    backgroundColor: '#0077B5', // LinkedIn blue color
    border: 'none', // Remove border
  };

  return (
    <Button
      href="https://www.linkedin.com/in/your-profile/"
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
    >
      <i className="fab fa-linkedin text-white"></i>
    </Button>
  );
}

export default LinkedinButton;