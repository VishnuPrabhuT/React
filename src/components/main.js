import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="React/" component={LandingPage} />
        <Route exact path="React/aboutme" component={AboutMe} />
        <Route exact path="React/contact" component={Contact} />
        <Route exact path="React/projects" component={Projects} />
        <Route exact path="React/resume" component={Resume} />
    </Switch>
)

export default Main;