import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

import './css/breadcrumb.css';

export default function BreadcrumB(){
    
    return(
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Game</Breadcrumb.Item>
        </Breadcrumb>
    )
}