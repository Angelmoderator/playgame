import React from 'react';
import { Row, Col, Accordion, Carousel, CarouselItem, ToggleButton} from 'react-bootstrap';

import News_element from './Components/News_element';
import Pagination from './Components/Pagination';
import Breadcrumb from './Components/Breadcrumb';
import Slider from './Components/Slider';

import slide1 from './img/slide1.jpg'
import slide2 from './img/slide2.jpg'
import slide3 from './img/slide3.jpg'
import slide4 from './img/slide4.jpg'
import slide5 from './img/slide5.jpg'

import './gamepage.css'

export const GamePage = () => {

    return(
        <div className='contain'>
            <Breadcrumb />
                <h2>Игра</h2>
                <div className='game'>

                    <Row>
                        <Col className="about" xxl={12} md={12} sm={12} xs={12}>
                            <h1>Momodora: Moonlit Farewell</h1>
                            <ToggleButton
                                        className="mb-2"
                                        id="toggle-check"
                                        type="checkbox"
                                        variant="outline-primary"
                                         >
                                            Action
                                    </ToggleButton>
                            
                                    <Carousel>
                <Carousel.Item>
                    
                        <img 
                            className='d-block w-100'
                            src={slide1}
                        />
                    
                </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={slide2}
                />

            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={slide3}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={slide4}
                />

            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={slide5}
                />

            </Carousel.Item>

        </Carousel>
                        </Col>
                        <Col className="about" xxl={12} md={12} sm={12} xs={12}>
                            <h4>Momodora: Moonlit Farewell" is the latest installment in the Momodora series. Join Momo, High Priestess of the village of Koho, as she embarks on a divine mission to save her people from imminent destruction at the hands of the demon hordes summoned by a malevolent bellringer.
                            </h4>
                        </Col>

                        <Carousel>
                        <Carousel.Item>
                        <iframe width="100%" height="370" src="https://www.youtube.com/embed/bE5q1IFclpA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        </Carousel.Item>
                        </Carousel>

                        <Col className="about" xxl={12} md={12} sm={12} xs={12}>
                            <h3>Story</h3>
                            <p>Momodora: Moonlit Farewell presents the account of the greatest calamity to befall the village of Koho, five years after the events of Momodora III.</p>
                            <p>Once the toll of an ominous bell is heard, the village is soon threatened by a demon invasion.</p>
                            <p>The village's matriarch sends Momo Reinol, their most capable priestess, to investigate the bell and find the bellringer responsible for summoning demons. It is their hope that by finding the culprit, they will also be able to secure the village's safety, and most importantly, the sacred Lun Tree's, a source of life and healing for Koho...</p>

                        </Col>
                        

                        <Col className="about" xxl={12} md={12} sm={12} xs={12}>
                            <h3>Features</h3>
                            <p>Momodora: Moonlit Farewell presents the account of the greatest calamity to befall the village of Koho, five years after the events of Momodora III.</p>
                            <p>nce the toll of an ominous bell is heard, the village is soon threatened by a demon invasion.</p>
                            <p>The village's matriarch sends Momo Reinol, their most capable priestess, to investigate the bell and find the bellringer responsible for summoning demons. It is their hope that by finding the culprit, they will also be able to secure the village's safety, and most importantly, the sacred Lun Tree's, a source of life and healing for Koho...</p>
                            
                        </Col>

                        <Col className="about" xxl={12} md={12} sm={12} xs={12}>
                            <dl className='Game-table'>
                                <dt>Players</dt>
                                <dd>1 player</dd>
                                <dt>Genre</dt>
                                <dd>Action</dd>
                                <dt>Developer</dt>
                                <dd>Bombservice</dd>
                                <dt>Lanquages</dt>
                                <dd>English / Japanese</dd>
                                <dt>Platform</dt>
                                <dd>PC</dd>
                            </dl>
                        </Col>
                      
                    <Col>
                    <p>
                    ©2023 Crimson Dusk. All rights reserved. Licensed to and published by Active Gaming Media Inc.
                    </p>
                    <p>© 2021 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries. All rights reserved.</p>
                    <p>Nintendo Switch™ and The Nintendo Switch logo are registered trademarks of Nintendo.
"PS" Family logo "PlayStation", "PS4" and "PS5" are registered trademarks and/or trademarks of Sony Interactive Entertainment Inc.
Microsoft, Windows, Xbox, Xbox One, Xbox Series X and the Xbox logos are trademarks of the Microsoft group of companies and are used under license from Microsoft.</p>
                    </Col>
               </Row>

       </div>
    </div>
    )
}