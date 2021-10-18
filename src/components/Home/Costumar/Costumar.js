import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Costumar.css'

const Costumar = () => {
    return (
        <div>
            <Container className=" my-5 text-center">
                <Row>
                    <Col className="customers-heading my-2">
                    <h4>Happy customers</h4>
                    <h2>LEADING THE WAY IN HOSPITAL</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="my-lg-5 py-lg-5">
                        <Col>
                            <div className="customer-icon my-lg-3">
                                <div>
                                    <i className="fas fa-graduation-cap"></i>
                                <h3>125</h3>
                                <h5> </h5>
                                <h4>Award Shows</h4>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="customer-icon my-lg-3">
                                <div>
                                    <i className="fas fa-procedures"></i>
                                <h3>1450</h3>
                                <h5> </h5>
                                <h4>Hospital Rooms</h4>
                                </div>
                            </div>
                        </Col>
                    </Col>
                    <Col md={6}>
                        <img className=" w-100" src="https://i.ibb.co/DMxfMbK/doctors-1.png" alt="" />
                    </Col>
                <Col className="my-lg-5 py-lg-5">
                        <Col>
                            <div className="customer-icon my-lg-3">
                                <div>
                                    <i className="far fa-thumbs-up"></i>
                                <h3>2295</h3>
                                <h5> </h5>
                                <h4>Satisfied Patients</h4>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="customer-icon my-lg-3">
                                <div>
                                    <i className="fas fa-ambulance"></i>
                                <h3>1450</h3>
                                <h5> </h5>
                                <h4>Machines</h4>
                                </div>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Costumar;