import React from 'react';

export const Artist = (props) => {
    return (
        <div>
            <h4>Artist: </h4>
            <p>{props.name}</p>
            <h4>Genres: </h4>
            <p>{props.genres}</p>
            <h4>Album: </h4>
            <p>{props.album}</p>
        </div>
    )
}

export default Artist;
