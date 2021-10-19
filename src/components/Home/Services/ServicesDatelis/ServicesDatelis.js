import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import './ServicesDatelis.css';

const ServicesDatelis = () => {
    const [count,setCoutn] = useState(0)
    const {id} = useParams()
    const { datelis } = useAuth()
    const detailsItem = datelis.find(date => date.key == id)
    console.log(detailsItem)

    const hendelPass = ()=>{
        const newcount = count + 1;
        setCoutn(newcount)
    }
    const hendelMin = ()=>{
        const newcount = count - 1;
        if (newcount < 0) {
            return;
        }
        setCoutn(newcount)
    }

    return (
        <div>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                     <Col md={5}>
                    <img src={detailsItem?.img} alt="" />
                    </Col>
                    <Col md={7} className="text-start px-5">
                        <h3>{detailsItem?.name}</h3>
                        <div className="d-flex justify-content-start">
                            <Rating
                            initialRating={detailsItem?.rating}
                            emptySymbol="far fa-star icon"
                            fullSymbol="fas fa-star icon"
                            readonly
                            ></Rating>
                            <p>3 Review</p>
                            <p>Add reviews</p>
                        </div>
                        <p>{detailsItem?.description}</p>
                        <h5>SKU: <span>EA34</span></h5>
                        <h5>Category:<span>Jackets, Shirts </span></h5>
                        <h5>Tags:<span>Clothes, Leather </span></h5>
                        <div className="d-flex my-md-3 align-items-center">
                            <h5>$ {detailsItem?.price*(count)}</h5>
                            <div className="d-flex my-md- mx-3 count-detalis">
                                <i onClick={hendelMin} class="far fa-window-minimize"></i>
                                <h5>{count}</h5>
                                <i  onClick={hendelPass} class="fas fa-plus"></i>
                            </div>
                        </div>
                         <button className="all-btn my-2">Add To Cart</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServicesDatelis;