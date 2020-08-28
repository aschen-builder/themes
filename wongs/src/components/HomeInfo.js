import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Logo from './Logo';
import HomeNav from './HomeNav';

export default function HomeInfo(props) {
    return (
        <div>
            <Row className="justify-content-center text-center my-5">
                <Col md={5}>
                    <Logo />
                </Col>
                <Col md={5} className="d-flex justify-content-center align-items-end">
                    <HomeNav />
                </Col>
            </Row>
        </div>
    );
}