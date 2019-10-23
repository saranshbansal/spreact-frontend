import { createBrowserHistory } from "history";
import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import CourseList from "./components/CourseList";
import CoursesAppBar from "./components/CoursesAppBar";
import Album from "./templates/album/Album";
import Blog from "./templates/blog/Blog";
import Checkout from "./templates/checkout/Checkout";
import Dashboard from "./templates/dashboard/Dashboard";
import Pricing from "./templates/pricing/Pricing";
import SignIn from "./templates/sign-in/SignIn";

class RouteConfig extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        {/* PUBLIC ROUTES */}
        <Route path="/login" component={SignIn} />
        {/* COMMON ROUTES */}
        <Route exact path="/" component={CoursesAppBar} />
        <Route path="/course-list" component={CourseList} />
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
