import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import bannerStyles from '../styles/bannerStyles';

const Banner = (props) => {
  const classes = props.classes;
  return(
    <section className={classes.sectionContainer}>
      <Grid container justify="flex-end" alignItems="center" className={classes.container}>
        <Grid item xs={12} md={7}>
          <div className={classes.textContainer}>
            <h2 className={classes.bigText}>¡Este verano, empezá francés!</h2>
            <p className={classes.textoOscuro}>Adultos - Adolescentes</p>
            <p className={classes.textoOscuro}>Cursos <span>regulares</span> e <span>intensivos</span></p>
            <p className={classes.textoOscuro}>Cursos de nivel inicial con <span> 20% de descuento</span> .</p>
            <p className={classes.textoConLineas}>Aprendé a comunicarte en francés en situaciones de la vida cotidiana.</p>
            <p className={classes.textoGrande}>¡No se abona matrícula!</p>
            <p className={classes.textoRosa}>Iniciamos en <span>Febrero</span> ... todo el mes!</p>
            <p className={classes.textoRosa}>Información a partir del <span>20/1/2019</span></p>
            <p className={classes.bigTextRosa}>¡Te esperamos!</p>
            <Button href='#Contacto' variant="extendedFab" aria-label="Delete" className={classes.button}>
              Contactanos
            </Button>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default withStyles(bannerStyles)(Banner);
