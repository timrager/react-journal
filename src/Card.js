import React from 'react';

const Card = (props) => {

    console.log(props.imageUrl)

    return (
        <div className="card-container">
            <div className="card">
                <img src={props.imageUrl} />
                <div className="card-info">
                    <div className="card-title">
                        <p className="card-country"><i class="fas fa-map-marker-alt"></i> {props.location}</p>
                        <p className="card-map"><a href={props.googleMapsUrl}>View on Google Maps</a></p>
                    </div>
                    <p className="card-location">{props.title}</p>
                    <p className="card-date">{props.startDate} - </p>
                    <p className="card-date">{props.endDate}</p>
                    <p className="card-desc">{props.description}</p>
                </div>
            </div>
        </div>
    )
}



export default Card;