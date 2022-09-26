import React from 'react';

const Artist = (props) => {
    return (
        <div>
            <p>Artist: {props.name}</p>
            <p>Genres: {props.genres}</p>
            <p>Albums: {props.albums}</p>
        </div>
    )
}

export default Artist;
