import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './Components/Navibar';
import Footer from './Components/Fotter';

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import {Home}     from './Home';
import {Game}     from './Game';
import {News}     from './News';
import {About}    from './About';
import {Contact}  from './Contact';
import {GamePage}  from './GamePage';

import './custom.css';




function App() {
  return (
    <>
      <Navibar />
      <Routes>
        <Route exact path="/"  element={<Home />}      />
        <Route path="/Game"     element={<Game />}     />
        <Route path="/News"     element={<News />}     />
        <Route path="/About"    element={<About />}    />
        <Route path="/Contact"  element={<Contact />}  />
        <Route path="/GamePage"  element={<GamePage />}  />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
