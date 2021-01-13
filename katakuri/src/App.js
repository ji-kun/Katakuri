import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';

import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
 
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {/* <Header /> */}
          <div className="section sec1">
            <Home />
          </div>
          <div className="section sec2">
            <About />
          </div>
          <div className="section sec3">
            <Projects />
          </div>
          <div className="section sec4">
            <Contact />
          </div>
          {/* <Footer /> */}
        </ReactFullpage.Wrapper>
      );
    }}
  />
  );
}

export default App;
