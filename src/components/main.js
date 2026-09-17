import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, ResumePage, AboutPage, ContactPage, ProjectsPage, NotFoundPage } from './portfolio';

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/resume" component={ResumePage} />
    <Route exact path="/aboutMe" component={AboutPage} />
    <Route exact path="/contact" component={ContactPage} />
    <Route exact path="/projects" component={ProjectsPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Main;