import React from 'react';
import { Row, Image, Button } from 'react-bootstrap';

import './css/HomeGraphic.css';

export default function HomeGraphic() {
    return (
        <div>
            <Row className="justify-content-center">
                <div style={{position: "relative"}}>
                    <Image className="hg-desktop" src={require('./img/hainanese-desktop.jpg')} />
                    <Image className="hg-mobile" src={require('./img/hainanese-mobile.jpg')} />

                    <div className="order-overlay">
                        <Button variant="secondary">Order Online</Button>
                    </div>
                </div>
            </Row>
            <Row className="justify-content-start my-2 px-3">
                <Button variant="secondary" className="order-mobile">Order Online</Button>
            </Row>
        </div>
    )
}