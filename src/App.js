import React from 'react';
import { Artist, Countdown } from './Components';
import { Routes, Route } from 'react-router-dom';
import { Home, Artists } from './Pages';
import { Header, Footer } from './Layout';
import './index.css';

const App = () => {

    const artistName = [['Linkin Park'], ['Kanye West'], ['Flume']];
    const artistGenres = [['Alternative rock', 'Nu metal'], ['Hip hop', 'Gospel'], ['Electronic', 'Future Bass']];
    const artistAlbum = [['Hybrid Theory'], ['The Life Of Pablo'], ['Flume']];
    
    const artistDesc = artistName.map((artist, index) => {
        const artistInfo = <Artist name={artistName[index]} genres={artistGenres[index].join(', ')} album={artistAlbum[index]}/>
        return (
            <React.Fragment key={artist}>           
                {artistInfo}
            </React.Fragment>
        )
    })

    //const artist = <Artist name={artistName} genres={artistGenres.join(', ')} albums={artistAlbum.join(', ')}/>
    return (
        <>
            {Countdown()}
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="artists" element={<Artists />} />
                <Route path="artists/:artist" element={artistDesc} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;
