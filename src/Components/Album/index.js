import React from 'react';
import Track from '../Track/index.js';

export const Album = (props) => {
    let songList, imgSrc, imgAlt;
    const hybridtheorySongs = ['Papercut', 'One Step Closer', 'With You', 'Points of Authority', 'Crawling', 'Runaway', 'By Myself', 'In The End', 'A Place For My Head', 'Forgotten', 'Cure for the Itch', 'Pushing Me Away'];
    const lifeofpabloSongs = ['Ultralight Beam', 'Father Stretch My Hands, Pt. 1', 'Pt. 2', 'Famous', 'Feedback', 'Low Lights', 'Highlights', 'Freestyle 4', 'I Love Kanye', 'Waves', 'FML', 'Real Friends', 'Wolves', 'Frank\'s Track', 'Siiiiiiiiilver Surffffeeeeer Intermission', '30 Hours', 'No More Parties in LA', 'Facts (Charlie Heat Version)', 'Fade', 'Saint Pablo'];
    const flumeSongs = ['Sintra', 'Holdin On', 'Left Alone', 'Sleepless', 'On Top', 'Stay Close', 'Insane', 'Change', 'Ezra', 'More Than You Thought', 'Space Cadet', 'Bring You Down', 'Warm Thoughts', 'What You Need', 'Star Eyes'];
    const albumList = props.map((album) => {
        if (album.toString() === 'Hybrid Theory') {
            songList = hybridtheorySongs.map((song) => <Track key={song} name={song}/>)
            imgSrc = 'https://m.media-amazon.com/images/I/81iC+O0ec2L._AC_SL1448_.jpg';
            imgAlt = 'Hybrid Theory album cover';
        }
        else if (album.toString() === 'The Life Of Pablo') {
            songList = lifeofpabloSongs.map((song) => <Track key={song} name={song}/>)
            imgSrc = 'https://preview.redd.it/yl3z1d3awzp01.jpg?auto=webp&s=9c33efac4377dc15d36a89eca0575a3497e26cc7';
            imgAlt = 'The Life Of Pablo album cover';
        }
        else if (album.toString() === 'Flume') {
            songList = flumeSongs.map((song) => <Track key={song} name={song}/>)
            imgSrc = 'https://m.media-amazon.com/images/I/81nFaQDzqPL._SL1500_.jpg';
            imgAlt = 'Flume album cover';
        }
        else {
            songList = null;
        }

        return (
            <React.Fragment key={album}>  
                <h2 key={album}>{album}</h2>
                <img src={imgSrc} alt={imgAlt}></img>
                <h2>Tracklist</h2>
                <ul>{songList}</ul>
                <hr></hr>
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

