import {useState, useEffect} from 'react';

const ResidentInfo = (props) => {

    return(
        <div>
            <h3>{props.name}</h3>
            <p>Status: {props.status}</p>
            <p>Origin: {props.from}</p>
            <p>episodes: {props.episodes.length}</p>
            <img src={props.img} />
        </div>
    )
    
}

export default ResidentInfo;