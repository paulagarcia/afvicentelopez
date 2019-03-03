import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import cursosStyles from '../styles/cursosStyles';
import borde from '../images/borde-2.png';

const Diplomas = (props) => {
  const classes = props.classes;
  return(
    <section className={classes.sectionContainer} style={{ paddingTop: '1rem'}}>
      <img className={classes.imgBorde2} src={borde} alt=''/>
      <h2 className={classes.sectionTitle} style={{ marginTop: '0'}}>Diplomas</h2>
      <div className={classes.textContainerDiplomas}>
        <p>El <span className={classes.extraText}>DELF (Diplôme d'études en langue française)</span> y <span className={classes.extraText}>el DALF (Diplôme approfondi de langue française)</span> son los diplomas oficiales entregados por el Ministerio de Educación francés para certificar las competencias en lengua francesa de los candidatos extranjeros. El DELF y el DALF están compuestos por 6 diplomas independientes, que corresponden a los seis niveles del Marco común europeo de referencia para las lenguas (CECR).</p>
        <p>Los diplomas DELF también existen en versión adaptada a jóvenes adolescentes.</p>
        <p>Es posible presentarse a las pruebas en los <span className={classes.extraText}>900 centros de exámenes</span> concertados distribuidos por 154 países, entre ellos, Francia.</p>
        <p>Las certificaciones del DELF y el DALF tienen en cuenta:</p>
        <ul className={classes.listDiplomas}>
          <li>las normas internacionales de diseño de pruebas</li>
          <li>la armonización con el Marco común europeo de referencia para las lenguas (CECR)</li>
        </ul>
        <p>Las certificaciones DELF y DALF están bajo la autoridad de la Comisión Nacional del DELF y del DALF cuya sede se encuentra en el CIEP.</p>
        <p>Los 6 diplomas que constituyen el DELF y el DALF son totalmente independientes. Por lo tanto, el candidato puede inscribirse directamente en el examen que prefiera, según su nivel.</p>
        <p>En cada nivel se evalúan las 4 competencias: <span className={classes.extraText}>comprensión y expresión orales, comprensión y expresión escritas</span>.</p>
      </div>
    </section>
  )
}

export default withStyles(cursosStyles)(Diplomas);
