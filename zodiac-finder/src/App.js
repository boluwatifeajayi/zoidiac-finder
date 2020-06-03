import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Checker from './components/Checker';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Aries from './zodiacSigns/Aries';
import Aquarius from './zodiacSigns/Aquarius';
import Cancer from './zodiacSigns/Cancer';
import Capricorn from './zodiacSigns/Capricorn';
import Gemini from './zodiacSigns/Gemini';
import Leo from './zodiacSigns/Leo';
import Libra from './zodiacSigns/Libra';
import Pisces from './zodiacSigns/Pisces';
import Sagittarius from './zodiacSigns/Sagittarius';
import Scorpio from './zodiacSigns/Scorpio';
import Taurus from './zodiacSigns/Taurus';
import Virgo from './zodiacSigns/Virgo';

import About from './components/pages/About';



export class App extends Component {
  state = {
    zodiacs : []
  };

  
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <div className="mainBody" id="mainb"></div>
                <div className="container">
                  <Checker />
                  <div id="homer">
                    <HomePage />
                  </div>
                  <div id="zodiacs">
                    <div id="aries">
                      <Aries />
                    </div>
                    <div id="aquarius">
                      <Aquarius />
                    </div>
                    <div id="cancer">
                      <Cancer />
                    </div>
                    <div id="capricorn">
                      <Capricorn />
                    </div>
                    <div id="gemini">
                      <Gemini />
                    </div>
                    <div id="leo">
                      <Leo />
                    </div>
                    <div id="libra">
                      <Libra />
                    </div>
                    <div id="pisces">
                      <Pisces />
                    </div>
                    <div id="sagittarius">
                      <Sagittarius />
                    </div>
                    <div id="scorpio">
                      <Scorpio />
                    </div>
                    <div id="taurus">
                      <Taurus />
                    </div>
                    <div id="virgo">
                      <Virgo />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}


export default App
