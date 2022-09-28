import React from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import { Album } from '../Album/index.js';

export const Artist = (props) => {
    const params = useParams();

    /*const getAlbumInfo = (albumtitle) => {
        if (albumtitle.toLowerCase() === (props.album).toString().toLowerCase()) {
            let album = Album(props.album);
            return (
                <>
                    <p><span>Artist:</span> {props.name}</p>
                    <p><span>Genres:</span> {props.genres}</p>
                    <p><span>Album:</span> {props.album}</p>
                    {album}
                </>
            )
        }
    }*/
    const getAlbum = Album(props.album);
    if ((params.artist).toLowerCase() === (props.name).toString().toLowerCase()) {
        return (
            <div>
                <p><span>Artist:</span> {props.name}</p>
                <p><span>Genres:</span> {props.genres}</p>
                <p><span>Album:</span> {props.album}</p>        
                { getAlbum }
            </div>
        )
    }
}

export default Artist;
