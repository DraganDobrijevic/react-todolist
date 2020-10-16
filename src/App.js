import React from 'react'
import './App.css'
import Header from './components/layout/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Wave from './components/Wave'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Wave/>
      </div>
    </Router>
  );
}

export default App
