import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { Geo } from "react-bootstrap-icons";


const Footer = () => {
  return (
    <div>
        <footer className='footer'>
            <Container>
                <Row className='align-item-center'>
                    <Col sm={6}>
                        {/* <img src={logo} alt='logo' /> */}
                        <p className='footer-text'>Made by Cheikh Sy </p>
                        <p className='footer-text'><Geo/> Toulouse, France </p>
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/cheikh-sy/" target="_blank"><img src={navIcon1} /></a>
                            <a href="https://github.com/Sy-Cheikh" target="_blank"><img src={navIcon2} /></a>
                            
                        </div>
                        <p>CopyRight 2022. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    </div>
  )
}

export default Footer