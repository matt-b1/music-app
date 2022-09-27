import React from 'react';
import { Artist, Album } from './Components';

const App = () => {
    const artistName = [['Linkin Park'], ['Kanye West'], ['Flume']];
    const artistGenres = [['Alternative rock', 'Nu metal'], ['Hip hop', 'Gospel'], ['Electronic', 'Future Bass']];
    const artistAlbum = [['Hybrid Theory'], ['The Life Of Pablo'], ['Flume']];

    const artistList = artistName.map((artist, index) => {
        const artistInfo = <Artist name={artistName[index]} genres={artistGenres[index].join(', ')} album={artistAlbum[index]}/>
        return (
            <React.Fragment key={artist}>  
                {artistInfo}
            </React.Fragment>
        )
    })
    //const artist = <Artist name={artistName} genres={artistGenres.join(', ')} albums={artistAlbum.join(', ')}/>
    const album = Album(artistAlbum);
    return (
        <>
            {artistList}
            {album}
        </>
    )
}

export default App;
