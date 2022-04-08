import React, {useState} from 'react';
import { Pagination } from 'react-bootstrap';

// Стили

import './css/pagination.css';

export default function PaginatiOn(){

    return(
        <Pagination>

            <Pagination.Prev />

            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>

            <Pagination.Next />
        </Pagination>
    )
}