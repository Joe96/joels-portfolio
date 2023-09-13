import React from 'react';
import Card from './Card';

const CardList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Card title="Card 1" content="Content for Card 1" />
        </div>
        <div className="col-md-4">
          <Card title="Card 2" content="Content for Card 2" />
        </div>
        <div className="col-md-4">
          <Card title="Card 3" content="Content for Card 3" />
        </div>
      </div>
    </div>
  );
};

export default CardList;