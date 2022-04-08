import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";


  
  import { Home } from './Home';
  import { Game } from './Game';
  import { News } from './News';
  import { About } from './About';
  import { Contact } from './Contact';

  export default function Main() {

    return(
        <>
            <Routes>
                <Route exact path="/"  element={<Home />}      />
                <Route path="/Game"     element={<Game />}     />
                <Route path="/News"     element={<News />}     />
                <Route path="/About"    element={<About />}    />
                <Route path="/Contact"  element={<Contact />}  />
            </Routes>
        </>
)}
