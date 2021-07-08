import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
    return (
        <>
          <div className="col-md-4 col-10 ">
                <div className="card">
                    <img src={props.imgsrc} class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text"></p>
                            <a href="#" className="btn btn-primary"></a>
                        </div>
                    </div>
            </div>
                   
        </>
    )
}
export default Card;