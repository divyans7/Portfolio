import React from 'react';
import LandingPage from './landingPage';
import { Switch, Route } from 'react-router-dom';
import Resume from './resume';
import About from './aboutMe';
import Contact from './contact';
import Projects from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/resume" component={Resume} />
        <Route path="/aboutMe" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
    </Switch>
)

export default Main; 