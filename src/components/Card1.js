import React from "react";
import CardBody from "./CardBody";
import CardImage from "./CardImage";

 const Card1 = () => {

    return  (
        <div className="card" style={ {width: "18rem"} }>
        <CardImage />
        <CardBody/>
      </div>
        )
 }

 export default Card1