import React from 'react';
import Button from './Button.js';

const CardBody = (props) => {
  return (
    <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text"> {props.text}</p>
    <Button url={props.url}/>
  </div>
    )
}
//export the components
export default CardBody;


// EJS to insert JS we used <% JS here %>
// In JSX to insert JS we use { JS here }