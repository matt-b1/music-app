import React from 'react';
import { Artist, Album } from './Components';
import './index.css';

const App = () => {
    const artistName = [['Linkin Park'], ['Kanye West'], ['Flume']];
    const artistGenres = [['Alternative rock', 'Nu metal'], ['Hip hop', 'Gospel'], ['Electronic', 'Future Bass']];
    const artistAlbum = [['Hybrid Theory'], ['The Life Of Pablo'], ['Flume']];
    const artistList = artistName.map((artist, index) => {
        const artistInfo = <Artist name={artistName[index]} genres={artistGenres[index].join(', ')} album={artistAlbum[index]}/>
        const album = Album(artistAlbum[index]);
        return (
            <React.Fragment key={artist}>           
                {artistInfo}
                {album}
            </React.Fragment>
        )
    })
    //const artist = <Artist name={artistName} genres={artistGenres.join(', ')} albums={artistAlbum.join(', ')}/>
    return (
        <>
            <h1>Music App</h1>
            {artistList}
        </>
    )
}

export default App;
