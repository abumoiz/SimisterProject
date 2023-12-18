


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 import TSelling from './TSelling';

function TCard(props)
{
return <div>
    <div className="card ml-10" style={{width: "35rem",marginLeft:"2rem"}}>
  <img src={props.src} className="card-img-top" alt="Unable to load"/>
  <div className="card-body">
    <h3 className="card-text"  style={{ maxHeight: "3em", overflow: "hidden" }} >{props.description}</h3>
  </div>
</div>
</div>

}
export default TCard;