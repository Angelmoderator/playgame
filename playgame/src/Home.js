// Основа
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// Компоненты

import Slider from './Components/Slider';
import Search from './Components/Seacrh';
import Game_element from './Components/Game_element';
import News_element from './Components/News_element';


import cover from './img/watch-dogs.jpg';
import cover4 from './img/cover4.jpg';
import cover2 from './img/cover2.jpg';
import Momodora_Moonlit_Farewell from './img/Momodora Moonlit Farewell.jpg'
import Homura_Hime from './img/Homura Hime.jpg'
import Ib from './img/Ib.jpg'
import Potato from './img/Potato Flowers in Full Bloom.jpg'
import The_Sealed_Ampoule from './img/The Sealed Ampoule.jpg'
import Record from './img/Record.png'
import Takkoman from './img/Takkoman.jpg'


export const Home = () => {

    return(
        <>
        <Slider />

        <Container>
            <Row>
                <Col className="news_inner" xxl={4} md={6} sm={12} xs={12}>
                    <News_element cover={cover4} title="Replica and Legal Dungeon of Somi's..." date="2022.04.05"/>
                </Col>
                <Col className="news_inner" xxl={4} md={6} sm={12} xs={12}>
                    <News_element cover={cover2} title="Japanese Rogue-lite Action Samurai Bringer Coming..." date="2022.04.01"/>
                </Col>
                <Col className="news_inner" xxl={4} md={6} sm={12} xs={12}>
                    <News_element cover={cover4} title="The release of Replica and Legal Dungeon of the..." date="2022.04.01"/>
                </Col>
            </Row>
        </Container>

        <Container style={{paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Row>

                <Search /> 

                <Col xxl={10} xs={12} className="game">
                    <Row>
                        
                        <Game_element  cover={Momodora_Moonlit_Farewell} title="Momodora Moonlit Farewell" genre="Action"/>
                        <Game_element  cover={Homura_Hime} title="Homura Hime" genre="Action"/>
                        <Game_element  cover={Ib} title="Ib" genre="Horror"/>
                        <Game_element  cover={Potato} title="Potato Flowers in Full Bloom" genre="RPG"/>
                        <Game_element  cover={The_Sealed_Ampoule} title="The Sealed Ampoule" genre="Casual"/>
                        <Game_element  cover={Record} title="Record of Lodoss War-Deedlit in Wonder Labyrinth-" genre="Action"/>
                        <Game_element  cover={Takkoman} title="Takkoman -Kouzatsu World-" genre="Action"/>
                        
                        <Col xxl={12} md={12} sm={12} xs={12}>
                            <a> <Button variant="info" >Увидеть больше</Button></a>
                        </Col>
                        
                    </Row>
                   
                </Col>
            </Row>
        </Container>
        </>
    )
}