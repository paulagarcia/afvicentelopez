import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Cursos from './Cursos';
import Header from './Header';
import Footer from './Footer';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  appContainer:{
    maxWidth: '1920px',
    margin: '0 auto',
    position: 'relative'
  }
}

const App = (props) => {
  const classes = props.classes;
  return(
    <Router>
      <div className={classes.appContainer}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/cursos" component={Cursos} />
        <Footer />
      </div>
    </Router>
  )
};


export default withStyles(styles)(App);
