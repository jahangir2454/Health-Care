import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hooks/useAuth';
import {  useState } from "react";
import './SignIn.css';

const SigIn = () => {
const auth = getAuth();
    const [email, setEmail] = useState('')
    const [error,setError] = useState('')
    const [password, setPassword] =useState('')
    const {googleSignIn} = useAuth()
    const hendelPass = () => {
        alert('Please Chack your Email')
    }
    const hendelemail = (e) => {
       setEmail(e.target.value)
    }

    const hendelpass = (e) => {
        setPassword(e.target.value)
    }
    const hendelsubmit = (e) => {
        e.preventDefault();
        if (password < 6) {
            setError('password must be at least 6 characters')
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
            }).catch(error => {
                setError("please create a account")
            })
       
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
                                    <div onClick={googleSignIn} className="d-flex justify-content-between sign-in-google">
                                        <img src="https://i.ibb.co/xG1H7VS/google-symbol.png" alt="" />
                                        <h6>Sign In With Google</h6>
                                    </div>
                                <h4>or sign In with email</h4>
                                </div>

                                <div className="sign-from">
                                    
                                    <form onSubmit={hendelsubmit}>
                                     <Form.Label>Email address:</Form.Label>
                                    <Form.Control onBlur={hendelemail}  type="email" placeholder="Enter email" required/>
                                            
                                    <Form.Label>Password:</Form.Label>
                                        <Form.Control onBlur={hendelpass} type="password" placeholder="Enter password" required />
                                        <h6>{error}</h6>
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