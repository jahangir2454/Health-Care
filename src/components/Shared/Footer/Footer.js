import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <img src="https://i.ibb.co/PYrxbvv/index.png" alt="" />
                            <span>Family <span className="footer-font">Health</span> Care</span>
                            <p>Medinova is a library of corporate and business templates with predefined web elements which helps you to build your own site.</p>
                            <button className="all-btn">Read More</button>
                            <div className="mt-3 d-flex  footer-icon-container">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i class="fab fa-linkedin-in"></i>
                                <i class="fab fa-google"></i>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-pages">
                            <h3>Pages</h3>
                            <p>Privacy Policy</p>  
                            <p>Donor Privacy Policy</p>  
                            <p>Disclaimer</p>  
                            <p>Terms of Use</p>  
                            <p>Copyright Notice</p>  
                            <p>Media Center</p>  
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-pages">
                            <h3>Quick Links</h3>
                            <p>Privacy Policy</p>  
                            <p>Donor Privacy Policy</p>  
                            <p>Disclaimer</p>  
                            <p>Terms of Use</p>  
                            <p>Copyright Notice</p>  
                            <p>Media Center</p>  
                        </div>
                    </Col>
                     <Col>
                        <div className="footer-pages">
                            <h3>Quick Contact</h3>
                            <p>+(012) 345 6789</p>  
                            <p>hello@yourdomain.com</p>  
                            <p>121 King Street, Melbourne Victoria 3000, Australia</p>  
                            <p>Subscribe to our newsletter</p>  
                              <InputGroup className="my-3 footer-input">
                                    <FormControl
                                    placeholder="your Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Text className="footer-send" ><i className="fas fa-paper-plane"></i></InputGroup.Text>
                                </InputGroup>  
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;