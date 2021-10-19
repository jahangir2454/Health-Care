import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Doctors.css'

const Doctors = () => {
    const history= useHistory()
    const {docId} = useParams()
    const { doctor } = useAuth()
    const datelisdoc = doctor.find(doc => doc.key == docId)
    console.log(datelisdoc)

    const hendelAppoiment = () => {
        history.push('/appointment')
    }

    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="doc-wrepar">
                            <img src={datelisdoc?.img} alt="" />
                             <div className="doc-icon my-3">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-google-plus-g"></i>
                            </div>
                        </div>
                        <div className="availability my-4">
                            <h4><span><i className="far fa-clock"></i></span> Availability</h4>
                            <div className="d-flex justify-content-between avail">
                                <h6>Monday - Friday</h6>
                                <h6>9.00 - 20.00</h6>
                            </div>
                            <div className="d-flex justify-content-between avail">
                                <h6>Saturday</h6>
                                <h6>10.00 - 16.00</h6>
                            </div>
                            <div className="d-flex justify-content-between avail">
                                <h6>Sunday</h6>
                                <h6>9.30 - 18.00</h6>
                            </div>
                            <button className="all-btn my-3">Request an appointment</button>
                        </div>
                    </Col>
                    <Col md={7} className="">
                        <div>
                            <div className="datelis-doc">
                            <h3>{datelisdoc?.name}</h3>
                            <h4>{datelisdoc?.mb}</h4>
                            <p>{datelisdoc?.description}</p>
                            </div>
                            <div className="doc-datelis-itms">
                                <div>
                                    <h6>Speciality</h6>
                                </div>
                                <div>
                                <p>{datelisdoc?.small}</p>
                                <p>{datelisdoc?.small3}</p>
                                <p>{datelisdoc?.small2}</p>
                                </div>
                            </div>
                            <div className="doc-datelis-itms">
                                <div>
                                    <h6>Education</h6>
                                </div>
                                <div>
                                <p>{datelisdoc?.EducationDex}</p>
                                <p>{datelisdoc?.EducationDex1}</p>
                                </div>
                            </div>
                            <div className="doc-datelis-itms">
                                <div>
                                    <h6>Experience</h6>
                                </div>
                                <p>{datelisdoc?.Experience}</p>
                            </div>
                            <div className="doc-datelis-itms">
                                <div>
                                    <h6>Education</h6>
                                </div>
                                <p>{datelisdoc?.description1}</p>
                            </div>
                             <div className="doc-datelis-itms">
                                <div>
                                    <h6>Address</h6>
                                </div>
                                <p>{datelisdoc?.description2}</p>
                            </div>
                             <div className="doc-datelis-itms">
                                <div>
                                    <h6>Phone</h6>
                                </div>
                                <p>{datelisdoc?.description3}</p>
                            </div>
                             <div className="doc-datelis-itms">
                                <div>
                                    <h6>Email</h6>
                                </div>
                                <p>{datelisdoc?.description4}</p>
                            </div>
                             <div className="doc-datelis-itms">
                                <div>
                                    <h6>Website</h6>
                                </div>
                                <p>{datelisdoc?.description5}</p>
                            </div>
                        </div>
                    </Col>
                    <div className=" m-auto text-center my-3">
                        <button onClick={hendelAppoiment} className="all-btn">Make an Appoinment</button>
                    </div>
                </Row>
           </Container>
        </div>
    );
};

export default Doctors;