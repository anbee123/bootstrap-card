import React from 'react';
import Button from './Button.js';

const CardBody = () => {
    return (
    <div className="card-body">
    <h5 className="card-title">Card Title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <Button />
  </div>
    )
}

export default CardBody;