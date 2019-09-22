import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Jobs from './pages/jobs/Jobs';
import Header from './components/header';
import Footer from './components/footer';
import Login from './pages/login';
import Inscription from './pages/inscription';

function Routee() {
  return (
      <div>
        <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
<<<<<<< HEAD
            <Route path="/jobs" component={Jobs} />
          
=======
            <Route exact path="/login" component={Login} />
            <Route  path="/inscription" component={Inscription} />
>>>>>>> c49b47724360f7e37d00eaf7cfff5c93237b3235
          </Switch>
        </Router>
        <Footer />
      </div>
  );
}

export default Routee;
