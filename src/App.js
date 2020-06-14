import React from 'react'
import About from './page/About'
import Projects from './page/Projects'
import LandingPage from './page/LandingPage'
import Navigation from './components/Navigation'
import Resume from './page/Resume'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import './App.css'

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/projects" component={Projects}/>
        <Route path="/about" component={About}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/" component={LandingPage}/>
      </Switch>
    </div>
  )
}
