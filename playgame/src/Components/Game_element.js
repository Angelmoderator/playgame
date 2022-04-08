// Основа
import React from 'react';
import { Row, Col, Accordion, ToggleButton} from 'react-bootstrap';
import { Link } from "react-router-dom";

// Стили
import './css/game_element.css';
import cover from '../img/watch-dogs.jpg';

export default function Game_element(props){

    return(

        <Col xxl={3} md={4} sm={6} xs={12} >
            <article >
                <Link to='/GamePage'>

                    <div className="game-thumb"><img src={props.cover} alt="" /></div>
                    <div className="game-title" data-genre={props.genre}>{props.title}l</div>
                </Link>  
            </article>

        </Col>

    );
}