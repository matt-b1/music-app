import React, { useState, useEffect, useRef } from 'react';
import { Artist, Album } from './Components';
import './index.css';

const App = () => {
    function Countdown() {
        const setBg = () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = "#" + randomColor;
          }
        const [timeLeft, setTimeLeft] = useState(30);
        const intervalRef = useRef(); 
        useEffect(() => {
            intervalRef.current = setInterval(() => {
            setTimeLeft((t) => t - 1);
            }, 1000);
        }, []);
        useEffect(() => {
            if (timeLeft <= 0) {
                setBg();
                setTimeLeft(30);
            }
        }, [timeLeft]);
        console.log(timeLeft);
    }
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
            {Countdown()}
            <h1>Music App</h1>
            {artistList}
        </>
    )
}

export default App;
