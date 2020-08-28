import React from 'react';
import { ListGroup, ListGroupItem, Navbar, Nav } from 'react-bootstrap';

export default function HomeNav(props) {
    return (
        /* <ListGroup horizontal id="home-nav">
            <ListGroup.Item active className="border-top-0 border-bottom-0 border-left-0 w-auto"><a href="/">Home</a></ListGroup.Item>
            <ListGroup.Item className="border-top-0 border-bottom-0 w-auto"><a href="/">About</a></ListGroup.Item>
            <ListGroup.Item className="border-top-0 border-bottom-0 w-auto"><a href="/">Hours & Location</a></ListGroup.Item>
            <ListGroup.Item className="border-top-0 border-bottom-0 w-auto"><a href="/">Menu</a></ListGroup.Item>
            <ListGroup.Item className="border-top-0 border-bottom-0 border-right-0 w-auto"><a href="/">Contact</a></ListGroup.Item>
        </ListGroup> */

        <Navbar>
            <Nav id="home-nav">
                <Nav.Item>
                    <Nav.Link className="home-nav-item border-right active" href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="home-nav-item border-right" href="/menu">Menu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="home-nav-item border-right" href="/info">Hours & Locations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="home-nav-item border-right" href="/info">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="home-nav-item" href="/contact">Contact Us</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}