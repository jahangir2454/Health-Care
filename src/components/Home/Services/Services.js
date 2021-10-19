import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data=>setService(data))
    }, [])
    const item= service.slice(0,9)
    return (
        <div className="services-heading my-lg-5">
            <Container>
                <Row>
                    <Col>
                     <h3>New <span>Collection</span></h3>
                    <p>See what new products are available in online shop</p>
                    </Col>
                </Row>
                <div className="services">
                     {
                    item.map(service=><Service service={service}></Service>)
                    }
                
                </div>
           </Container>
        </div>
    );
};

export default Services;


