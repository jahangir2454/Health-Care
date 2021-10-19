import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Doc from './doc/Doc';
import './Doctor.css'

const Doctor = () => {
    const { doctor } = useAuth()
    return (
        <div>
            <Container>
                <Row className="justify-content-center my-lg-3 my2">
                    <Col md={6} className="text-center">
                        <h2>Our Doctors</h2>
                        <p>Every day we bring hope to millions of children in the world's
                        hardest places as a sign of God's unconditional love.</p>
                    </Col>
                </Row>
                <div className="doctor-wrepar my-3">
                    {
                     doctor.map(doctor=><Doc doctor={doctor}></Doc>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Doctor;


