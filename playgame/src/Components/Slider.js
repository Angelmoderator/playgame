import React from 'react';
import { Carousel } from 'react-bootstrap';

import cover from '../img/watch-dogs.jpg';
// import styled from 'styled-components';

import cover1 from '../img/cover1.jpg'
import cover2 from '../img/cover2.jpg'
import cover3 from '../img/cover3.jpg'
import cover4 from '../img/cover4.jpg'
import cover5 from '../img/cover5.jpg'

import './css/slider.css'

// const Styles = styled.div `
//     .carousel .slide{
//         height: 650px;
//     }
    
// `

export default function Slider() {

    return(

    <>
        <Carousel>
                <Carousel.Item>
                    
                        <img 
                            className='d-block w-100'
                            src={cover1}
                        />
                        <Carousel.Caption>
                            <h5>(日本語) 3Dダンジョン探索RPG『両手いっぱいに芋の花を』</h5>
                        </Carousel.Caption>
                    
                </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={cover2}
                />
                <Carousel.Caption>
                    <h5>Mighty Goose Free DLC Update Coming April 19!</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={cover3}
                />
                <Carousel.Caption>
                    <h5>Japanese Rogue-lite Action Samurai Bringer Coming to Nintendo Switch, PlayStation®4, and Steam on April 21st</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={cover4}
                />
                <Carousel.Caption>
                    <h5>Replica and Legal Dungeon now out on PS4 and Xbox!</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={cover5}
                />
                <Carousel.Caption>
                    <h5> (日本語) 『くちなしアンプル』</h5>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
        </>
    )
}