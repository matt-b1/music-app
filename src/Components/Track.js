import React, { useState } from 'react';

const Track = props => {
    const [ likes, setLikes ] = useState(0);
    const increaseLikes = () => setLikes(prevState => prevState + 1);
    const [ disable, setDisable ] = useState(false);
    const clicked = () => setDisable(true);
    let trackKey = `${props.name}`;
    return (
        <li key={trackKey}> {props.name}
            <button onClick={() => {
                increaseLikes();
                clicked();
            }} disabled={disable}>Like</button>
            <p>Likes: {likes} </p>
        </li>
    )
}

export default Track;
