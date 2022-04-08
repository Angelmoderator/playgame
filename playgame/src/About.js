import React from 'react';
import { Row,  Col, Container } from 'react-bootstrap';

import News_element from './Components/News_element';
import Pagination from './Components/Pagination';
import Breadcrumb from './Components/Breadcrumb';


export const About = () => {

    return(
        <div className='contain'>
        <Breadcrumb />
       <h2>О нас</h2>
       <div className='align'>

               <Row>
                   <Col className="about" xxl={12} md={12} sm={12} xs={12}>
                       <h1>Bringing thecream of the crop of indie gamesto players worldwide.</h1>
                   </Col>
                   <Col>
                   <p>
                   There are games created by one person, or by small teams, simply because the creators wanted to. They are created because of the passion these people hold towards their art. This passion is not something that can be imitated with huge budgets and large teams. These are the games that we have supported for almost a decade. These, are Indie Games.
                   </p>
                   <p>PlayGame has, from the very beginning, been driven to deliver these games to as many players as possible. We began by creating a platform from which we could distribute indie games. From there we started localizing into multiple languages to overcome borders and then expanding into Steam and Console platforms.</p>
                   <p>Our hope, is for all gamers to play as many indie games as they can.</p>
                   </Col>
               </Row>

       </div>
   </div>
    )
}