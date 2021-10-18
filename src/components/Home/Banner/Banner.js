import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div  className="banner-container">
            <div>
                <img src="https://i.ibb.co/XFjrrbV/pexels-photo-48604.jpg" alt="" />
            </div>
            <div className="banner-content">
                <Container>
                <Row>
                    <Col lg={6}>
                    <div>
                        <h2>Best Doctor & <span>Medical Care</span></h2>
                            <p>MedDoctors Are A Medical And Health Department Provider Institutions. Suitable For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health And Any Related Medical Care Field.</p>
                            <button className="all-btn banner-btn me-2">Find A Doctor</button>
                            <button className="all-btn banner-btn">Discover More</button>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default Banner;