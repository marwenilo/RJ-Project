import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Jobs from "./pages/jobs/Jobs";
import CompanyList from "./pages/CompanyList";
import CompanyProfile from "./pages/CompanyProfile";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./pages/login";
import Inscription from "./pages/inscription";

const Routee = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/compnay-lists" component={CompanyList} />
          <Route path="/compnay-profile/:id" exact component={CompanyProfile} />
          <Route exact path="/login" component={Login} />
          <Route path="/inscription" component={Inscription} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default Routee;
