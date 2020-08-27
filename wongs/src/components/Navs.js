import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Image, Row, Col } from 'react-bootstrap';
import Logo from './Logo';

const TopNav = () => {
    return (
        <Navbar bg="primary" sticky="bottom" variant="dark">
            <p className="h5 text-white text-center mx-auto">We are accepting take-out and delivery orders during COVID-19! Please check out our menu here!</p>
        </Navbar>
    );
}

const BottomNav = () => {
    const footerStyle = {
        position: "absolute",
        bottom: "0",
        width: "100%"
    }

    return (
        <footer className="bg-primary px-5 text-white footer py-2" style={footerStyle}>
            <Row className="justify-content-center text-center">
                <Col md={4}>
                    <p className="h5">Text</p>
                </Col>
                <Col md={4}>
                    <p className="h5">Text</p>
                </Col>
                <Col md={4}>
                    <p className="h5">Text</p>
                </Col>
            </Row>
        </footer>
    )
}

export {
    TopNav,
    BottomNav
}