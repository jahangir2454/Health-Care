import React from 'react';
import { Link } from 'react-router-dom';
import './Doc.css';

const Doc = (props) => {
    console.log(props.doctor)
    const {name,img,cetagory,dp,key}  = props.doctor;
    return (
        <div className="doc-wrepar my-3">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>{cetagory}</h5>
            <p>{dp}</p>
            <div className="d-flex px-2 doc-icon justify-content-between">
                <div>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-google-plus-g"></i>
                </div>
                <Link to={`/doctors/${key}`}>
                <button className="all-btn">view datelis</button>
                </Link>
            </div>
        </div>
    );
};

export default Doc;