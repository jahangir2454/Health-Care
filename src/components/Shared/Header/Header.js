
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Header.css'

const Header = () => {
    const { user,signout } = useAuth();
    const history = useHistory()
    const hendelSign = () => {
        history.push('/signIn')
    }
    const hendelSingUp = () => {
        history.push('/signUp')
        console.log(user)
    }
    return (
        <div>
            <nav className="main-header">
                <Navbar collapseOnSelect expand="lg" >
                    <Container>
                        <NavLink to="/home" className="nav-logo">
                            <img src="https://i.ibb.co/PYrxbvv/index.png" alt="" />
                            <span><span className="logo-font">via</span>Dent</span>
                        </NavLink>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto headerNav">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/doctors">Doctors</NavLink>
                                <NavLink to="/services">Services</NavLink>
                               {user.email &&<span className="hed-span">{user.displayName}</span>}
                               {user.email&&  <button onClick={signout} className="sign-btn me-2">logout</button>}
                                {!user.email &&<button onClick={hendelSign} className="sign-btn me-2">Sign In</button>}
                                {!user.email&&<button className="m-sm-3" onClick={hendelSingUp} className="sign-btn">Sign Up</button>}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
            </nav>
        </div>
    );
};

export default Header;