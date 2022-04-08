// Основа
import React from 'react';
import { Carousel } from 'react-bootstrap';

// Стили
import './css/slider_element.css';
import cover from '../img/watch-dogs.jpg';

export default function Slider_element(){

    return(

            <Carousel.Item>
                <img className='d-block w-100' src={cover} />
                <Carousel.Caption>  <h3>хахаха</h3>   </Carousel.Caption>  
            </Carousel.Item>

    );
}