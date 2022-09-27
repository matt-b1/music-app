import React from 'react';
import Track from '../Track/index.js';

export const Album = (props) => {
    console.log(props);
    let songList;
    const hybridtheorySongs = ['Papercut', 'One Step Closer', 'With You', 'Points of Authority', 'Crawling', 'Runaway', 'By Myself', 'In The End', 'A Place For My Head', 'Forgotten', 'Cure for the Itch', 'Pushing Me Away'];
    const albumList = props.map((album) => {
        if (album.toString() === 'Hybrid Theory') {
            songList = hybridtheorySongs.map((song) => <Track key={song} name={song}/>)
        }
        else {
            songList = null;
        }

        return (
            <React.Fragment key={album}>  
                <h3>Album</h3>
                <p key={album}>{album}</p>
                <h3>Tracklist</h3>
                <ul>{songList}</ul>
            </React.Fragment>
        )
    })
    return (
        <div>
            <hr></hr>
            {albumList}
        </div>
    )
}

