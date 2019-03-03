import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import textSectionStyles from '../styles/textSectionStyles';
import borde from '../images/borde-2.png';


const Traducciones = (props) => {
  const classes = props.classes
  return(
    <section className={classes.sectionContainer}>
      <img className={classes.imgBorde2} src={borde} alt=''/>
      <h2 className={classes.sectionTitle}>Traducciones e Interpretaciones</h2>
      <p>La Alianza cuenta con un equipo de prestigiosos traductores públicos inscriptos en el Colegio de Traductores Públicos de la Ciudad de Buenos Aires, todos matriculados y con una amplia experiencia en traducciones públicas, científicas y literarias.</p>
      <p>Además realizamos interpretaciones consecutivas y/o simultáneas en conferencias, reuniones y congresos. Trabajamos en todos los campos de las distintas disciplinas.</p>
      <p>No dudes en contactarnos por consultas o para pedir tu presupuesto.</p>
      <Button href='#Contacto' variant="extendedFab" aria-label="Delete" className={classes.button}>
        Contactanos
      </Button>
    </section>
  )
}

export default withStyles(textSectionStyles)(Traducciones);
