import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//Contenido Cajas
import textosCursos from './textosCursos';
// Personal Styles
import cursosStyles from '../styles/cursosStyles';
// Logo
import logo from '../images/logo.svg';


class CursosPorNiveles extends React.Component{
  state = {
    expanded: [false, false, false, false, false, false],
  };

  componentDidMount() {
    document.getElementById('cursos').scrollIntoView(true, {block: 'start'})
  }

  handleExpandClick = i => {
    const list = this.state.expanded.map((item, j) => {
        if (j === i) {
          return !item;
        } else {
          return false;
        }
      })
      this.setState(state => ({ expanded: list }))
    };

    render(){
      const {classes} = this.props;

      return(
        <section className={classes.sectionContainer} id='cursos'>
            <img src={logo} alt='alianza francesa de Vicente López' className={classes.logo} />
            <h2 className={classes.sectionTitle}>Cursos</h2>
            <Grid container justify='space-around' alignItems='flex-start' className={classes.cursosContainer}>
              {textosCursos.map(curso => (
                <Grid item key={curso.id} className={classes.item}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <div className={classes.nombreCurso}>{curso.nombre}</div>
                      <h4 className={classes.nivel}>{curso.nivel}</h4>
                      <p> {curso.descripcion} </p>
                  </CardContent>
                  <CardActions className={classes.cardAction}>
                    <p>Detalles</p>
                    <IconButton
                      className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded[curso.id],
                      })}
                      onClick={() => this.handleExpandClick(curso.id)}
                      aria-expanded={this.state.expanded[curso.id]}
                      aria-label="Ver Mas"
                    >

                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={this.state.expanded[curso.id]} timeout="auto" unmountOnExit className={classes.collapse}>
                    <CardContent>
                      <p>{curso.horario}</p>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
              ))}
          </Grid>
        </section>
      )
    }
}

export default withStyles(cursosStyles)(CursosPorNiveles);
