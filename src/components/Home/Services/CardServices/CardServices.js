import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CardService.css';

const CardServices = () => {
    return (
        <div className="my-4">
            <Container>
                <Row>
                    <Col className="m-auto text-center card-service-heading" md={5}>
                        <h2>Services</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} >
                        <Row className="d-flex justify-content-center m-2 align-items-center emergency">
                            <Col md={2}>
                                <div>
                                <i class="fas fa-ambulance"></i>
                                </div>
                            </Col>
                            <Col md={10}>
                                <div>
                                    <h2>Emergency Care</h2>
                                    <p>All around the world, acutely ill and injured people seek care every day.  Frontline providers manage children and adults with medical, surgical and obstetric</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex justify-content-center m-2 align-items-center emergency">
                            <Col md={2}>
                                <div>
                                <i className="fas fa-procedures"></i>
                                </div>
                            </Col>
                            <Col md={10}>
                                <div>
                                    <h2>Operation Theatre</h2>
                                    <p>All around the world, acutely ill and injured people seek care every day.  Frontline providers manage children and adults with medical, surgical and obstetric</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex justify-content-center m-2 align-items-center emergency">
                            <Col md={2}>
                                <div>
                                <i className="fas fa-user-md"></i>
                                </div>
                            </Col>
                            <Col md={10}>
                                <div>
                                    <h2>Cancer Service</h2>
                                    <p>All around the world, acutely ill and injured people seek care every day.  Frontline providers manage children and adults with medical, surgical and obstetric</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex justify-content-center m-2 align-items-center emergency">
                            <Col md={2}>
                                <div>
                                <i className="fas fa-stethoscope"></i>
                                </div>
                            </Col>
                            <Col md={10}>
                                <div>
                                    <h2>Outdoor Checkup</h2>
                                    <p>All around the world, acutely ill and injured people seek care every day.  Frontline providers manage children and adults with medical, surgical and obstetric</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex justify-content-center m-2 align-items-center emergency">
                            <Col md={2}>
                                <div>
                                <i className="far fa-plus-square"></i>
                                </div>
                            </Col>
                            <Col md={10}>
                                <div>
                                    <h2>Blood Test</h2>
                                    <p>All around the world, acutely ill and injured people seek care every day.  Frontline providers manage children and adults with medical, surgical and obstetric</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex justify-content-center m-2 align-items-center emergency">
                            <Col md={2}>
                                <div>
                                <i class="fas fa-ambulance"></i>
                                </div>
                            </Col>
                            <Col md={10}>
                                <div>
                                    <h2>Emergency Care</h2>
                                    <p>All around the world, acutely ill and injured people seek care every day.  Frontline providers manage children and adults with medical, surgical and obstetric</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CardServices;