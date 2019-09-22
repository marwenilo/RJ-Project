import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/header';
import Footer from './components/footer';
import Login from './pages/login';

function Routee() {
  return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
        <Footer />
      </div>
  );
}

export default Routee;
