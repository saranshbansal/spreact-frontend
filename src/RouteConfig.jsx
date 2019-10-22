import { createBrowserHistory } from "history";
import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import Appbar from "./components/Appbar";
import CourseList from "./components/CourseList";
import Album from "./material-ui/templates/album/Album";
import Blog from "./material-ui/templates/blog/Blog";
import Checkout from "./material-ui/templates/checkout/Checkout";
import Dashboard from "./material-ui/templates/dashboard/Dashboard";
import Pricing from "./material-ui/templates/pricing/Pricing";
import SignIn from "./material-ui/templates/sign-in/SignIn";

class RouteConfig extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        {/* PUBLIC ROUTES */}
        <Route path="/login" component={SignIn} />
        {/* COMMON ROUTES */}
        <Route exact path="/" component={Appbar} />
        <Route path="/components/course-list" component={CourseList} />
        <Route path="/components/album" component={Album} />
        <Route path="/components/blog" component={Blog} />
        <Route path="/components/checkout" component={Checkout} />
        <Route path="/components/dashboard" component={Dashboard} />
        <Route path="/components/pricing" component={Pricing} />

        {/* <Route path="*" component={NotFoundPage} /> */}
      </Router>
    );
  }
}

export default RouteConfig;
