import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

const logo = require('./img/logo-long.png');

export default function Logo() {
    return (
        <div className="text-left justify-content-start">
            <Image fluid src={logo} />
            <p className="h2">A cornerstone of Phoenix's Chinese Cuisine.</p>
        </div>
    );
}