import React from "react"
import Avatar from "./Avatar";
import Detail from "./Detail";
function Card(props){
    return  (
        <div className = "block col-lg-4 col-md-6">
        <div className="card ">
            <div className= "card-body">
                <div className="top">
                    <h2 className = "name">{props.name}</h2>
                    <Avatar img = {props.img}/> 
                </div>

                <div className="bottom">
                    <Detail
                        phone = {props.phone}
                    />
                </div>
            </div>
        </div>
        </div>
    );
}
export default Card;