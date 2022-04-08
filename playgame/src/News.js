import React from 'react';
import { Row,  Col, Container } from 'react-bootstrap';

import News_element from './Components/News_element';
import Pagination from './Components/Pagination';
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

export const News = () => {

    return(
        <div className='contain'>
             <Breadcrumb />
            <h2>Новости</h2>
            <div className='align'>

                    <Row>
                    <Col className="news_inner" xxl={12} md={12} sm={12} xs={12}>
                    <News_element cover={cover4} title="Replica and Legal Dungeon of Somi's..." date="2022.04.05"/>
                </Col>
                <Col className="news_inner" xxl={12} md={12} sm={12} xs={12}>
                    <News_element cover={cover2} title="Japanese Rogue-lite Action Samurai Bringer Coming..." date="2022.04.01"/>
                </Col>
                <Col className="news_inner" xxl={12} md={12} sm={12} xs={12}>
                    <News_element cover={cover4} title="The release of Replica and Legal Dungeon of the..." date="2022.04.01"/>
                </Col>

                

                        <Col xxl={12} md={12} sm={12} xs={12} className="js-center" >
                            <Pagination />
                        </Col>
                    </Row>

            </div>
        </div>
    )
} 