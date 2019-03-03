import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import textSectionStyles from '../styles/textSectionStyles';
import borde from '../images/borde-1.png';


const QuienesSomos = (props) => {
  const classes = props.classes
  return(
    <section className={classes.sectionContainer}>

      <img className={classes.imgBorde} src={borde} alt=''/>
      <h2 className={classes.sectionTitle}>Quiénes Somos? </h2>
      <p>La Alianza Francesa es una asociación civil sin fines de lucro, constituida en conformidad con los estatutos y los objetivos de la Alianza Francesa de París, teniendo por finalidad la difusión de la lengua francesa y agrupar a todos aquellos que deseen contribuir al desarrollo de la lengua y del pensamiento francés, y asegurar lazos de cooperación y amistad entre Francia y Argentina.</p>
      <p>Para el logro de estos objetivos, la Alianza Francesa dispone de distintos medios, ofreciendo cursos de alta calidad adaptados a su público de acuerdo con la pedagogía siempre renovada, creando, animando y acompañando manifestaciones que favorezcan la difusión cultural e intercambios.</p>
      <p>Nosotros, la Alianza Francesa de Vicente López, tenemos el respeto como valor fundamental, comprometiéndonos cada uno con el espíritu de equipo, garantizando la calidad de nuestros servicios para satisfacción de nuestros alumnos.</p>

    </section>
  )
}

export default withStyles(textSectionStyles)(QuienesSomos);
