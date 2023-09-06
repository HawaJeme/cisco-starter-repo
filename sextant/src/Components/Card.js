import React from "react";

function Card(props){
    return (
        <div className="card">
            <h2 className="card-up">{props.Name}</h2>
            <h1 className="card-down">{props.Num}</h1>
        </div>
    )
}

export default Card