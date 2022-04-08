// Основа

import React from 'react';
import {Image} from 'react-bootstrap';

// Стили

import './css/news_element.css';
import cover from '../img/watch-dogs.jpg';

export default function News_element(props){

    return(

      
            <a href="">
                <div className="news-thumb"><Image src={props.cover} alt="" /></div>
                <div className="news-title">

                    <div className="date">{props.date}</div>
                    <div className="title">{props.title}</div>

                </div>
            </a>
       
    );
}