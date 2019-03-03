import React from 'react';
// Material Components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// Personal styles
import landingStyles from '../styles/landingStyles';
import logo from '../images/logo.svg';
// Link
import { Link } from 'react-router-dom';


const LandingPage = (props) => {
  const classes = props.classes;
  return(
    <>
    <div className={classes.landingContainer} >
      <img src={logo} alt='alianza francesa de Vicente López' className={classes.logo} />
      <section className={classes.sectionContainer}>
        <h1 className={classes.homeTitulo}>Alianza Francesa de Vicente López</h1>
        <Button component={Link} to="/cursos" variant="extendedFab" aria-label="Ver los cursos" className={classes.button}>
          Ver los Cursos
        </Button>
    </section>
  </div>
    </>
  )

}


export default withStyles(landingStyles)(LandingPage);
