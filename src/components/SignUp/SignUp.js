import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory,useLocation } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

import './SignUp.css'


const SignUp = () => {
    const [name, setName] = useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const { googleSignIn, createUser, error, setError } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect = location.state?.from || '/home';
    const hendelPass = () => {
        alert('Please Chack your Email')
    }

    const hendelName = (e) => {
        setName(e.target.value)
    }
    const hendelEmail = (e) => {
        setEmail(e.target.value)
    }
    const hendelPassword = (e) => {
        setPassword(e.target.value)
    }
     
    const hendelsubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
           setError('password must be at least 6 characters')
            return;
        } if (password.length > 6) {
            setError('')
        }
           createUser(email, password)
    }
    const hendelSubmit = () => {
        googleSignIn()
            .then(result => {
            history.push(redirect)
            }).catch(err => {
            setError(err.message)
        })
    }
    return (
        <div>
             <div className="sign-in py-lg-5">
            <Container>
                <div  className=" sign-in-content">
                    <Row>
                        <Col lg={6}>
                            <div>
                                <div className="sign-in-from-items">
                                <h3>Family Health Care</h3>
                                <h2>Create a account</h2>
                                    <div onClick ={hendelSubmit}
                                     className="d-flex justify-content-between sign-in-google">
                                        <img src="https://i.ibb.co/xG1H7VS/google-symbol.png" alt="" />
                                        <h6>Sign In With Google</h6>
                                    </div>
                                <h4>or sign In with email</h4>
                                </div>

                                <form onSubmit={hendelsubmit} >
                                        <div className="sign-from">
                                            
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control onBlur={hendelName}  type="tex" placeholder="Enter Name" required/>
                                            
                                    <Form.Label>Email address:</Form.Label>
                                    <Form.Control onBlur={hendelEmail}  type="email" placeholder="Enter email" required/>
                                            
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control onBlur={hendelPassword} type="password" placeholder="Enter password" required/>
                                            
                                </div>
                                    <div className="d-flex justify-content-around sign-in-check">
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember Me" />
                                         </Form.Group>
                                        <Link onClick={hendelPass} to="/signUp">Forgot Password ?</Link>
                                        </div>
                                        <p className="error-han">{error}</p>
                                <div className="sign-in-submit my-3">
                                        <input  type="submit" />
                                    </div>
                                        </form>
                                    <div className="change-page-sign">
                                        <Link to="/signIn">
                                        <p>Already have an account ? <span>Sign In</span> </p>
                                    </Link>
                                    </div>
                        
                    </div>
                            </Col>
                            <Col lg={6}>
                        <img src="https://i.ibb.co/V32QnYF/doctors-5.jpg" alt="" />
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
        </div>
    );
};

export default SignUp;