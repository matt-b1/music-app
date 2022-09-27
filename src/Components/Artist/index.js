import React from 'react';
import './style.css';

export const Artist = (props) => {
    return (
        <div>
            <p><span>Artist:</span> {props.name}</p>
            <p><span>Genres:</span> {props.genres}</p>
            <p><span>Album:</span> {props.album}</p>
        </div>
    )
}

export default Artist;
