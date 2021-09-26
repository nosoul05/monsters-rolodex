import React from 'react';
import './card.styles.css'

export const Card = (props) =>(
<div className='card-container'> 
<img alt ="monster" src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`}></img>
    <h1> {props.monsters.name}</h1>
    <h2>{props.monsters.name}</h2>
    <p>{props.monsters.email}</p>
    <h3>{props.monsters.phone}</h3>
    <p>{props.monsters.address.street}</p>
</div>


);