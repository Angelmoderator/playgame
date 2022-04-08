import React, {useState }from 'react';
import { Row, Col, Accordion, ToggleButton} from 'react-bootstrap';

import './css/search.css';

export default function Search(){

    const [value, setValue] = useState([1, 3]);
    const handleChange = (val) => setValue(val);

    return(

        <Col xxl={2} sm={12} xs={12} className="search-settings">
                    <div className="accordion-main">
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Platform</Accordion.Header>
                                <Accordion.Body>
                                    <ToggleButton
                                        className="mb-2"
                                        id="toggle-check"
                                        type="checkbox"
                                        variant="outline-primary"
                                        alue={value}
                                        onChange={handleChange} >
                                            PC
                                    </ToggleButton>

                                    <ToggleButton
                                        className="mb-2"
                                        id="toggle-check"
                                        type="checkbox"
                                        variant="outline-primary"
                                        alue={value}
                                        onChange={handleChange} >
                                            PS4
                                    </ToggleButton>

                                    <ToggleButton
                                        className="mb-2"
                                        id="toggle-check"
                                        type="checkbox"
                                        variant="outline-primary"
                                        value="1"
                                        onChange={handleChange} >
                                            XBOX
                                    </ToggleButton>
                                    
                                
                                </Accordion.Body>

                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Genre</Accordion.Header>
                                <Accordion.Body>
                                    <ToggleButton
                                        className="mb-2"
                                        id="toggle-check"
                                        type="checkbox"
                                        variant="outline-primary"
                                        alue={value}
                                        onChange={handleChange} >
                                            Action
                                    </ToggleButton>
                                    <ToggleButton
                                        className="mb-2"
                                        id="toggle-check"
                                        type="checkbox"
                                        variant="outline-primary"
                                        alue={value}
                                        onChange={handleChange} >
                                            RPG
                                    </ToggleButton>
                                    <ToggleButton
                                        className="mb-2"
                                        id="toggle-check"
                                        type="checkbox"
                                        variant="outline-primary"
                                        alue={value}
                                        onChange={handleChange} >
                                            Adventure
                                    </ToggleButton>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Release Date</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
        </Col>
    );
} 