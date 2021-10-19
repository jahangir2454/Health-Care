import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

import './Service.css'

const Service = (props) => {
    const { name, img, price, rating,key } = props.service;
    
    
    return (
        <div>
            <div className="servic-content">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star icon"
                            fullSymbol="fas fa-star icon"
                            readonly
                        ></Rating>
                <h4>Price: $ {price}</h4>
                <Link to={`/serv/${key}`}>
                <button className="all-btn">Product Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;