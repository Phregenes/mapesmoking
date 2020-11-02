import React, { component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import LandingPage from './pages/LandingPage';

import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <div className="App">
        <header>
          <Menu />
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/home" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/landingpage" component={LandingPage}/>
          </Switch>
        </header>
      </div>
    </div>
  );
}

export default App;
