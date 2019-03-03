import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import institucionesStyles from '../styles/institucionesStyles';
import schoolIcon from '../images/010-school.svg';
import borde from '../images/borde-3.png';

const Instituciones = (props) => {
  const classes = props.classes;
  return(
    <section className={classes.sectionContainer}>
      <img className={classes.imgBorde3} src={borde} alt=''/>
      <h2 className={classes.sectionTitle}>Instituciones Afiliadas</h2>
      <div className={classes.boxContainer}>
        <div className={classes.textContainer}>
          <p>La Alianza Francesa de Vicente López mantiene convenios de cooperación con diversas instituciones tanto públicas como privadas, que constituyen a la difusión del idioma francés y de la cultura francófona.</p>
          <p>Es especialmente en los ámbitos de la educación escolar y universitaria, donde se establecen lazos de cooperación más estrechos que continúan desde hace más de tres décadas, y que se fortalecen en la red de excelencia de los colegios afiliados y de otras instituciones.</p>
          <p>Los convenios tienen entre otros los siguientes beneficios: descuentos y becas para cursos de francés, asesoría pedagógica, entrega de material didáctico para las instituciones y sus respectivos profesores, acceso a la mediateca y los cursos de formación que se realizan en nuestra sede. Además, pueden participar en todos los eventos culturales organizados por nuestra institución.</p>
        </div>
        <div className={classes.listContainer}>
          <img className={classes.icon} src={schoolIcon} alt='Instituciones Afiliadas a la Alianza Francesa de Vicente López' />
          <div>
            <p>Colegio Cardenal Spínola</p>
            <p>Colegio Corazón de Jesús</p>
            <p>Colegio Highlands</p>
            <p>Colegio Nuestra Señora de la Misericordia (Belgrano)</p>
            <p>Colegio de Abogados de San Isidro</p>
          </div>
          <div>
            <p>Colegio San Gabriel</p>
            <p>Colegio San Pablo</p>
            <p>Colegio de Psicólogos de la Provincia de Buenos Aires</p>
            <p>Colegio de Traductores Públicos de la Ciudad de Buenos Aires</p>
            <p>Colegio Tarbut</p>
          </div>
          <div>
            <p>St. Nicholas' School</p>
            <p>Sworn College Moreno</p>
            <p>Nueva Escuela Argentina 2000</p>
            <p>St. Marys' International College</p>
            <p>Universidad Nacional de La Matanza</p>
            <p>Círculo de Traductores de Zona Norte</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default withStyles(institucionesStyles)(Instituciones);
