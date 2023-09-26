import React from 'react';
import '../Card.css';

const Card = ({ title, content }) => {

  return (

    <div className="card mb-5">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
      <button type="submit" className="btn btn-dark">View Project on Github</button>

    </div>

  );

};

export default Card;