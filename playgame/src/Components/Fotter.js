// Основа
import React from 'react';
import { Nav, Navbar, Image, Col, Row} from 'react-bootstrap';
import { Link } from "react-router-dom";

// Стили
import './css/fotter.css';
import logo from '../img/logo.png'

export default function Fotter(){

    return(

        <footer>
            <Row>
                <Col xxl={12} md={12} sm={12} xs={12}>
                    <Navbar collapseOnSelect expand="md" className="navbar" sticky="top">
            
                    
                            <Nav className="mr-auto">
                            <Nav.Link>     <Link to='/'>Home</Link>            </Nav.Link>
                            <Nav.Link>   <Link to='/Game'>Game</Link>            </Nav.Link>
                            <Nav.Link>   <Link to='/News'>News</Link>            </Nav.Link>
                            <Nav.Link>  <Link to='/About'>About</Link>          </Nav.Link>
                            <Nav.Link>  <Link to='/Contact'>Contact</Link>     </Nav.Link>
                            </Nav>



                        <Navbar.Brand href="/">
                        <Image alt="" src={logo}  width="140px" height="100%" className="d-inline-block align-top" />
                        </Navbar.Brand>
                    </Navbar>
                </Col>
                <Col xxl={12} md={12} sm={12} xs={12} className='text'>
                    <p>PlayGame, the PlayGame logo and other related images are registered trademarks of Active Gaming Media Inc</p>
                    
                </Col>
            </Row>
        </footer>
    )
}