import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import delfStyles from '../styles/delfStyles';
import globalIcon from '../images/009-global-1.svg';

const DelfDalf = (props) => {
  const classes = props.classes
  return(
    <section className={classes.sectionContainer}>
      <div className={classes.textContainer}>
        <div className={classes.textHeader}>
          <p><span>¡Atención!</span> Próximamente en la <b>Alianza Francesa de Vicente López ... </b> </p>
          <img src={globalIcon} alt='Delf-Dalf Diplomas con reconocimiento internacional' className={classes.icon}/>
        </div>
        <div className={classes.textBody}>
          <p className={classes.sesion}>Sesión Noviembre 2019 </p>
          <h2>DELF-<span>DALF</span></h2>
          <p className={classes.text}>Diplomas de Lengua Francesa con <b>reconocimiento internacional</b> otorgado por el Ministerio de Educación Francés</p>
        </div>
        <div className={classes.textFooter}>
          <p className={classes.text}>Únicos centros oficiales autorizados: Alianzas Francesas</p>
        </div>
      </div>
    </section>
  )
}


export default withStyles(delfStyles)(DelfDalf);
