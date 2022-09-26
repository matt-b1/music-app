import React from 'react';
import Artist from './Components/Artist.js';
import Album from './Components/Album.js'

const App = () => {
    const artistName = 'Linkin Park';
    const artistGenres = ['Alternative rock', 'Nu metal', 'Alternative metal', 'Rap rock', 'Electronic rock', 'Pop rock'];
    const artistAlbums = ['Hybrid Theory', 'Meteora', 'Minutes to Midnight']
    const artist = <Artist name={artistName} genres={artistGenres.join(', ')} albums={artistAlbums.join(', ')}/>
    const album = Album(artistAlbums);
    return (
        <>
            {artist}
            {album}
        </>
    )
}

export default App;
