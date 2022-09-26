import React from 'react';

const Album = (props) => {
    const albumList = props.map((album) => {
        const hybridtheorySongs = ['Papercut', 'One Step Closer', 'With You', 'Points of Authority', 'Crawling', 'Runaway', 'By Myself', 'In The End', 'A Place For My Head', 'Forgotten', 'Cure for the Itch', 'Pushing Me Away'];
        const meteoraSongs = ['Foreword', 'Don\'t Stay', 'Somewhere I Belong', 'Lying from You', 'Hit the Floor', 'Easier to Run', 'Faint', 'Figure.09', 'Breaking the Habit', 'From the Inside', 'Nobody\'s Listening', 'Session', 'Numb'];
        const mtmSongs = ['Wake', 'Given Up', 'Leave Out All the Rest', 'Bleed It Out', 'Shadow of the Day', 'What I\'ve Done', 'Hands Held High', 'No More Sorrow', 'Valentine\'s Day', 'In Between', 'In Pieces', 'The Little Things Give You Away'];
        let songList;
        if (album === 'Hybrid Theory') {
            songList = hybridtheorySongs.map((song) => <li key={song}>{song}</li>)
        }
        else if (album === 'Meteora') {
            songList = meteoraSongs.map((song) => <li key={song}>{song}</li>)
        }
        else if (album === 'Minutes to Midnight') {
            songList = mtmSongs.map((song) => <li key={song}>{song}</li>)
        }
        return (
            <>  
                <h3>Album</h3>
                <p key={album}>{album}</p>
                <h3>Tracklist</h3>
                <ul>{songList}</ul>
            </>
        )
    })
    return (
        <div>
            <hr></hr>
            {albumList}
        </div>
    )
}

export default Album;
