import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <button type="submit" className="btn btn-primary">View Project on Github</button>
      </div>
    </div>
  );
};

export default Card;