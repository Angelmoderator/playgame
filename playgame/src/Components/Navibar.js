import React, {useContext, useState} from 'react';
import { Nav, Navbar, Button, Image, Modal, Form} from 'react-bootstrap';
import { Link } from "react-router-dom";

// 

import './css/navbar.css';
import './modal.css'

import logo from '../img/logo.png'
import { observer } from 'mobx-react-lite';

const Navibar = observer(() => {

    // переменная авторизаций

    const[show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
    <>
        <Navbar collapseOnSelect expand="md" className="navbar" sticky="top">
          <Navbar.Brand href="/">
              <Image alt="" src={logo}  width="140px" height="100%" className="d-inline-block align-top" />
        </Navbar.Brand>

           
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link>     <Link to='/'>Home</Link>            </Nav.Link>
                        <Nav.Link>   <Link to='/Game'>Game</Link>            </Nav.Link>
                        <Nav.Link>   <Link to='/News'>News</Link>            </Nav.Link>
                        <Nav.Link>  <Link to='/About'>About</Link>          </Nav.Link>
                        </Nav>

                        <Nav>
                             <Button variant="primary"><Link to='/Login'> <a>Log in</a>    </Link></Button> 
                            <Button variant="primary" className="secondary"> <Link to='/Login'><a>Registration</a>  </Link>  </Button>
                        </Nav>
                        
                    </Navbar.Collapse>

        </Navbar>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Log in</Modal.Title>
            </Modal.Header>  
            <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Почта</Form.Label>
                            <Form.Control type="email" placeholder="Введите почту" />
                            <Form.Text className="text-muted">Никому не говорите адрес эл.почты</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" placeholder="Введите пароль" />
                        </Form.Group>
                        <Form.Group controlId="fromBasicCheckBox">
                            <Form.Check type="checkbox" label="Запомнить" />
                        </Form.Group>
                    </Form>
            </Modal.Body>
              
        </Modal>

    </>
)});

export default Navibar;