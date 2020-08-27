import React from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeInfo from '../components/HomeInfo';

export default function HomeRoute(props) {
    return (
        <Container className="my-5 py-5" fluid>
            <HomeInfo />
        </Container>
    )
}