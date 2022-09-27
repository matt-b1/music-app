import React, { useState } from 'react';
import './style.css';

const Track = props => {
    const [ likes, setLikes ] = useState(0);
    const increaseLikes = () => setLikes(prevState => prevState + 1);
    const [ disable, setDisable ] = useState(false);
    const clicked = () => setDisable(true);
    let trackKey = `${props.name}`;
    return (
        <div class='card'>
            <li className='track' key={trackKey}> 
                <h4>{props.name}</h4>
                <button onClick={() => {
                    increaseLikes();
                    clicked();
                }} disabled={disable}>Like</button>
                <p>Likes: {likes} </p>
            </li>
        </div>
    )
}

export default Track;
