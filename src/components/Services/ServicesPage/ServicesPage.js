import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

const ServicesPage = () => {
    return (
        <div>
        <div className="ser-page">
            <img className="w-100" src="https://i.ibb.co/C6PRqGV/pexels-photo-4269355.jpg" alt="" />
            </div>
            <div className="service-banner-headding">
                <Container>
                    <Row>
                        <Col>
                            <h3>Services</h3>
                            <Link to="/">
                                Home
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ServicesPage;