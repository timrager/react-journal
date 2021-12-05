import React from 'react';

const Card = (props) => {

    console.log(props.imageUrl)

    return (
        <div className="card-container">
            <div className="card">
                <img src={props.imageUrl} />
                <div className="card-info">
                    <div className="card-title">
                        <p>{props.location}</p>
                        <p>{props.googleMapsUrl}</p>
                    </div>
                    <p>{props.title}</p>
                    <p>{props.startDate}</p>
                    <p>{props.endDate}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}



export default Card;