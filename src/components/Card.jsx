import React from "react"

function Card(props){
    return  (
        <div>
        <div className="card col-md-4 col-sm-6 col-xs-12">
            <div className= "card-body">
                <div className="top">
                <h2 className = "name">{props.name}</h2>
                <img
                    className= "circle-img"
                    src={props.img}
                    alt="avatar_img"
                />
                </div>
                <div className="bottom">
                <p className = "info">{props.phone}</p>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Card;