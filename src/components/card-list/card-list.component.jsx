import React from 'react';
import './card-list.css';
import {Card} from '../Card/card.component';


export const CardList = props =>(
    <div className='card-list'>
        {
          props.monsters.map(monsters =>(
              <Card key={monsters.id} monsters={monsters} />
            // <h1 key={monsters.id}> {monsters.name} </h1>
            
          ))}
    </div>

);


// export const CardList = props =>{
//     // console.log(props);
//     return <div className='card-list'>{props.children}</div>

// };


// export const CardList = (props) =>{
// console.log(props);
// return(  <div>Hello</div> )
// } 