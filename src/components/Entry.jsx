import React from "react";
import './Entry.css'

export default function Entry(props) {
    return (
        <div className="entry">
            <div style={{backgroundImage: `url(${props.imageUrl})`}} className="image--container">
            </div>

            <div className="entry--info">
                <div className="entry--country">
                    {props.location.toUpperCase()}
                    <a href={props.googleMapsUrl} target='_blank' className='entry--link'>View on Google Maps</a>
                </div>
                <div className="entry--location">{props.title}</div>
                <div className="entry--dates">{props.startDate} - {props.endDate}</div>
                <div className="entry--description">{props.description}</div>
            </div>
        </div>
    )
}