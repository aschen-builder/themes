import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Logo from './Logo';

export default function HomeInfo(props) {
    return (
        <div>
            <Row className="justify-content-center text-center my-5">
                <Col md={5}>
                    <Logo />
                </Col>
                <Col md={5}>
                    <p>Text</p>
                </Col>
            </Row>
        </div>
    );
}