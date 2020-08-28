import React from 'react';
import { ListGroup, ListGroupItem, Navbar, Nav } from 'react-bootstrap';
import './css/HomeNav.css'

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
                    <Nav.Link className="home-nav-item border-right" target="new" href="https://www.beyondmenu.com/23377/phoenix/wong-s-restaurant-phoenix-85037.aspx?utm_source=satellite&utm_medium=top_banner&_">Menu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="home-nav-item border-right" href="/info">Hours</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="home-nav-item border-right" href="/info">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="home-nav-item" href="/contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}