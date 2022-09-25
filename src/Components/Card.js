import React from 'react';
import drop from "./Images/drop.png"

export default function Card(props){
    return(
        <section className='cardx'>
            <img src={props.item.imageUrl} alt='*'/>
                <p><img id='drop' src={drop} alt="*"/>{props.item.location}</p>
                <p><a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
                <h1>{props.item.title}</h1>
                <p>{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            <hr></hr>
        </section>
    )
}