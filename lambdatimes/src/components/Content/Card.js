import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.data.headline /* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.data.img/* image source goes here */} alt="card" />
        </div>
        <span>By {props.data.author /* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
