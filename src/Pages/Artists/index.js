import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Artists = () => {
    return (
        <>
            <Link to="Linkin Park">Linkin Park</Link>
            <Link to="Kanye West">Kanye West</Link>
            <Link to="Flume">Flume</Link>
        </>
    )
}

export default Artists;
