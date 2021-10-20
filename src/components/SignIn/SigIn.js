import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory,useLocation } from "react-router-dom";

import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './SignIn.css';

const SigIn = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const location = useLocation()
    const redirect = location.state?.from || '/home';
    const {googleSignIn ,signInuser,error,setError} = useAuth()
    const hendelPass = () => {
        alert('Please Chack your Email')
    }
    const hendelGoogle = () => {
        googleSignIn()
            .then(result => {
            history.push(redirect)
        })
    }

    const hendelEmail = e => {
        setEmail(e.target.value)
    }
    const hendelPassword = e => {
        setPassword(e.target.value)
    }
    

    const hendelSubmit = e => {
         e.preventDefault();
        if (password.length< 6) {
            setError('password must be at least 6 characters')
            return;
        } if (password.length > 6) {
            setError('')
        }
        signInuser(email,password)
    }

    return (
        <div className="sign-in py-lg-5">
            <Container>
                <div  className=" sign-in-content">
                    <Row>
                    <Col lg={6}>
                        <img src="https://i.ibb.co/vLX41t8/doctor-1.png" alt="" />
                    </Col>
                        <Col lg={6}>
                            <div>
                                <div className="sign-in-from-items">
                                <h3>Family Health Care</h3>
                                <h2>Welcome Back</h2>
                                    <div onClick={hendelGoogle} className="d-flex justify-content-between sign-in-google">
                                        <img src="https://i.ibb.co/xG1H7VS/google-symbol.png" alt="" />
                                        <h6>Sign In With Google</h6>
                                    </div>
                                <h4>or sign In with email</h4>
                                </div>

                                <div className="sign-from">
                                    <form onSubmit={hendelSubmit}>
                                     <Form.Label>Email address:</Form.Label>
                                        <Form.Control onBlur={hendelEmail} type="email" placeholder="Enter email" required />
                                            
                                    <Form.Label>Password:</Form.Label>
                                        <Form.Control onBlur={hendelPassword} type="password" placeholder="Enter password" required />
                                         <p>{error}</p>
                                        
                                    <div className="sign-in-submit my-3">
                                        <input  type="submit" />
                                    </div>
                                    </form>
                                    </div>





                                    <div className="change-page-sign">
                                        <Link to="/signUp">
                                        <p>Already have an account ? <span>Sign Up</span> </p>
                                    </Link>
                                </div>
                                 <div className="d-flex justify-content-around sign-in-check">
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember Me" />
                                         </Form.Group>
                                        <Link onClick={hendelPass} to="/signIn">Forgot Password ?</Link>
                                    </div>
                        
                    </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
};

export default SigIn;