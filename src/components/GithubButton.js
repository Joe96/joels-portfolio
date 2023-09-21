import React from 'react';
import Button from 'react-bootstrap/Button';

function GithubButton() {
  const buttonStyle = {
    width: '40px', // Adjust the size as needed
    height: '40px', // Adjust the size as needed
    borderRadius: '50%', // Make it circular
    padding: '0', // Remove padding
    fontSize: '18px', // Adjust the font size as needed
  };

  return (
    <Button
      variant="outline-dark" // Customize the button's color
      style={buttonStyle}
      href="https://github.com/your-github-repo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-github"></i>
    </Button>
  );
}

export default GithubButton;