import React from 'react';
import drop from "./Images/drop.png"

export default function Card(props){
    return(
        <section className='cardx'>
            <img src={props.item.imageUrl} alt='*'/>
                <p className='location'><img id='drop' src={drop} alt="*"/>{props.item.location}</p>
                <p className='maps'><a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
                <h1 className='title'>{props.item.title}</h1>
                <p className='date'>{props.item.startDate} - {props.item.endDate}</p>
                <p className='description'>{props.item.description}</p>
                <hr className='hori'></hr>
        </section>
    )
}