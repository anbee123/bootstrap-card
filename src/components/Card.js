import React from "react";
import CardBody from "./CardBody";
import CardImage from "./CardImage";

 const Card = (props) => {

    return  (
        <div className="card" style={ {width: "18rem"} }>
        <CardImage  img={props.img}/>
        <CardBody 
        {...props} />
      </div>
        )
 }

 export default Card