import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Компоненты

import Search from './Components/Seacrh';
import Pagination from './Components/Pagination';
import Game_element from './Components/Game_element';
import Breadcrumb from './Components/Breadcrumb';

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

export const Game = () => {
    return(
        <>
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Row>
                <Breadcrumb />
            </Row>
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
                        
                        <Col xxl={12} md={12} sm={12} xs={12} className="js-center">
                           <Pagination />
                        </Col>
                        
                    </Row>
                   
                </Col>
            </Row>
        </Container>
        </>
    )
}
