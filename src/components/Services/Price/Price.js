import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Price.css'

const Price = () => {
    return (
        <div className="my-4">
            <Container>
                <Row>
                    <Col md={4} className="m-auto">
                    <div className="price-hed text-center">
                            <h3>Our Price</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque </p>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} >
                        <div className="price-card my-3">
                            <h3>Dental Care</h3>
                            <h5>Hurry to grap your offer now</h5>
                            <h1>$35</h1>
                            <p>Review of Safety Program</p>
                            <p>Annual Sexual Harassment Training</p>
                            <p>Monthly Newsletter</p>
                            <p>Safety Training Topics</p>
                            <button className="all-btn">GET OFFER</button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="price-card my-3">
                            <h3>Blood Test</h3>
                            <h5>Hurry to grap your offer now</h5>
                            <h1>$55</h1>
                            <p>Review of Safety Program</p>
                            <p>Annual Sexual Harassment Training</p>
                            <p>Monthly Newsletter</p>
                            <p>Safety Training Topics</p>
                            <button className="all-btn">GET OFFER</button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="price-card my-3">
                            <h3>Medical Checkup</h3>
                            <h5>Hurry to grap your offer now</h5>
                            <h1>$70</h1>
                            <p>Review of Safety Program</p>
                            <p>Annual Sexual Harassment Training</p>
                            <p>Monthly Newsletter</p>
                            <p>Safety Training Topics</p>
                            <button className="all-btn">GET OFFER</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Price;