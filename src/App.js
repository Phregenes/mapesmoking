import React, { component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import LandingPage from './pages/LandingPage';
import WhereBuy from './pages/WhereBuy';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/home" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
        <Route path="/landingpage" component={LandingPage}/>
        <Route path="/wherebuy" component={WhereBuy}/>
        <Route path="/products" component={Products}/>
      </Switch>
    </div>
  );
}

export default App;
