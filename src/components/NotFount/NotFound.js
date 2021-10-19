import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound">
            <img src="https://i.ibb.co/wr5rXFg/notFound.jpg" alt="" />
            <div className="notfound-btn">
                <Link exact to="/home">
                    <button>Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;