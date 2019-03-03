import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import footerStyles from '../styles/footerStyles';
import imagen from '../images/borde-footer.png';
import faceIcon from '../images/011-logo.png';
import twitterIcon from '../images/012-bird.png';
import ScrollableAnchor from 'react-scrollable-anchor';
import Hidden from '@material-ui/core/Hidden';

const Footer = (props) => {
  const classes = props.classes;
  return(
    <ScrollableAnchor id={'Datos-de-contacto'}>
    <footer className={classes.footer}>
      <img src={imagen} className={classes.imgResponsive} alt=''/>
      <section className={classes.sectionContainer}>
        <Grid container>
          <Hidden smDown>
            <Grid item md={4}>
              {/* eslint-disable-next-line */}
              <a rel="noopener noreferrer" href='https://goo.gl/maps/tM1DqzyJCtx' target='_blank' className={classes.mapLink} />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={12} md={8} className={classes.contactContainer}>
            <h2 className={classes.sectionTitle}>Datos de Contacto</h2>
            <a rel="noopener noreferrer" href='https://goo.gl/maps/tM1DqzyJCtx' target='_blank'><p> Av. Maipú 830, Vicente López</p></a>
            <p>+54 11 4837 0617 / 4791 8010</p>
            <p> info@afvicentelopez.com.ar </p>
            <div>
              <a  rel="noopener noreferrer" href='https://www.facebook.com/alianzafrancesa.vl' target='_blank'>
                <img src={faceIcon} className={classes.socialIcon} alt='link al facebook de la alianza francesa de Vicente López'/>
              </a>
              <a rel="noopener noreferrer" href='https://twitter.com/afvicentelopez' target='_blank'>
                <img src={twitterIcon} className={classes.socialIcon} alt='link al twitter de la alianza francesa de Vicente López'/>
              </a>
            </div>
          </Grid>
        </Grid>
      </section>
      <Grid container justify="space-between" className={classes.subFooter}>
        <Grid item>
          Todos los derechos reservados &copy; 2018
        </Grid>
        <Grid item>
          Diseñado por <a rel="noopener noreferrer" href='https://www.linkedin.com/in/mariapaulagarciapereira/' target='_blank'><b>Paula García</b></a>
        </Grid>
        <Grid item>
          Iconos diseñados por Freepik en<a rel="noopener noreferrer" href='www.flaticon.com' target='_blank'> Flaticon </a>
        </Grid>
    </Grid>
    </footer>
  </ScrollableAnchor>
  )
}


export default withStyles(footerStyles)(Footer);
