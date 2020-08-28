import React from 'react';
import { Navbar, Row, Col } from 'react-bootstrap';
import SiteMap from './SiteMap';

const TopNav = () => {
    return (
        <Navbar bg="primary" sticky="bottom" variant="dark">
            <p className="small mb-0 text-white text-center mx-auto">We are accepting take-out and delivery orders during COVID-19! Please check out our menu <a className="text-white" target="new" href="https://www.beyondmenu.com/23377/phoenix/wong-s-restaurant-phoenix-85037.aspx?utm_source=satellite&utm_medium=top_banner&_" style={{textDecoration: "underline"}}>here</a>!</p>
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
        <footer className="bg-primary px-5 text-white footer py-3" style={footerStyle}>
            <Row className="justify-content-center text-center">
                <Col md={4}>
                    <p className="small mb-0">2020 (C) Wong's Restaurant</p>
                </Col>
                <Col md={4}>
                    <SiteMap />
                </Col>
                <Col md={4}>
                    <p className="small mb-0">(623) 877-41223 | info@wongsphoenix.com</p>
                </Col>
            </Row>
        </footer>
    )
}

export {
    TopNav,
    BottomNav
}