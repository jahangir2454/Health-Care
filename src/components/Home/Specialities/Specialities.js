import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Specialities.css';

const Specialities = () => {
    return ( 
        <div>
            <Container className="specialities-content my-lg-5">
                <h2>Our <span>Specialities</span></h2>
                <h5>Great one let abundantly sixth let were one earth were him after tree seed over.</h5>
                <Row className="spec-icon mt-4">
                    <Col className="spec-icon-item">
                        <i class="fas fa-file-medical"></i>
                        <p>Orthopaedics</p>
                    </Col>
                    <Col className="spec-icon-item" >
                        <i class="fas fa-user-md"></i>
                        <p>Cardiology</p>
                    </Col>
                    <Col className="spec-icon-item" >
                        <i class="fas fa-medkit"></i>
                        <p>Neurology</p>
                    </Col>
                        <Col className="spec-icon-item" >
                        <i class="fas fa-x-ray"></i>
                        <p>x-ray</p>
                    </Col>
                    <Col  className="spec-icon-item">
                        <i class="fas fa-procedures"></i>
                        <p>procedures</p>
                    </Col>
                </Row>
            </Container>
            <Container className="spec-items">
                 <Row>
                    <Col>
                    <img className=" w-100" src="https://i.ibb.co/41CL40N/1.jpg" alt="" />
                    </Col>
                    <Col className="mt-5 px-5 spec-ortho">
                        <div>
                            <h3>Services</h3>
                            <h2>Orthopaedics</h2>
                            <p>Mauris non iaculis massa. Sed bibendum quam porttitor ullamcorper facilisis. Aliquam vestibulum eget magna vitae convallis. Pellentesque ut mattis est, at convallis massa. Vestibulum elementum scelerisque lectus a accumsan. Pellentesque bibendum felis tempus, hendrerit nisi non, luctus nisi. Fusce blandit magna vitae velit facilisis luctus.</p>
                            <Row className="spec-detalis">
                                <Col>
                                    <div>
                                        <i class="far fa-arrow-alt-circle-right"></i>
                                        <span>Qualified Doctors</span>
                                    </div>
                                    <div>
                                        <i class="far fa-arrow-alt-circle-right"></i>
                                        <span>24×7 Emergency Services</span>
                                    </div>
                                    <div>
                                        <i class="far fa-arrow-alt-circle-right"></i>
                                        <span>General Medical</span>
                                    </div>
                                </Col>
                                  <Col>
                                    <div>
                                        <i class="far fa-arrow-alt-circle-right"></i>
                                        <span>Feel like Home Services</span>
                                    </div>
                                    <div>
                                        <i class="far fa-arrow-alt-circle-right"></i>
                                        <span>Outdoor Checkup</span>
                                    </div>
                                    <div>
                                        <i class="far fa-arrow-alt-circle-right"></i>
                                        <span>Easy and Affordable Billing</span>
                                    </div>
                                </Col>
                            </Row>
                            <button className="all-btn mt-4">View Details</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Specialities;
