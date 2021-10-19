import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Apppoinment.css'

const Appoinment = () => {
    return (
        <div  className="appoinment-img-item">
            <div>
                <img className="w-100 appoinment-img" src="https://i.ibb.co/VBk8dcR/jebin.jpg" alt="" />
            </div>
            <div className="appo-card">
                <Container>
                <Row>
                    <Col md={6}>
                            <h2>World Famous Heart Hospital</h2>
                            <p>One of the world's leading hospitals providing safe & compassionate care at its best for everyone with cheapest medical cost. Molestias deserunt nisi repellat cumque quo</p>
                            <button className="all-btn">Read More</button>
                    </Col>
                </Row>
            </Container>
            </div>
            <Container className="my-4">
                <Row>
                    <Col md={6}>
                        <div className="make-appointment">
                            <h3>Make An appointment Now</h3>
                            <h6> </h6>
                            <p>During his training at Akron, Dr. Jonathon Alex was team physician for the University of Akron and Walsh University.</p>
                        </div>
                        <div>
                            <Form>
                                <div className="sign-from">
                                     <Form.Control type="name" placeholder="Enter name" required />
                                    <Form.Control type="email" placeholder="Enter email" required/>
                                    <Form.Control  type="number" placeholder="phone number" required/>
                                    <Form.Control placeholder="Enter message" as="textarea"  />
                                    <button class="all-btn my-3">Submit Now</button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <img src="https://i.ibb.co/64LTrKv/1.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Appoinment;