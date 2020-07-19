import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Delete from './pages/Delete'
import Search from './pages/Search'
import { NoMatch } from "./pages/NoMatch";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Layout } from './components/Layout'
import { Jumbotron } from './components/Jumbotron'
import { NavigationBar } from "./components/NavigationBar";

function App() {
  return (
    <React.Fragment>  
    <NavigationBar />
    <Jumbotron />
    <Layout>
      <Router>
        <Switch>
          <Route exact path={['/Search']} component={Search} />
          <Route exact path={['/', '/Delete']} component={Delete} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </Layout>
  </React.Fragment>
  );
}


export default App;
