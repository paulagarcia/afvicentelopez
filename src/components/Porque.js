import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import porqueStyles from '../styles/porqueStyles';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import textosPorque from './TextosPorque';

class Porque extends React.Component {

  state = {
    expanded: [false, false, false, false, false],
  };

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
    const {classes} = this.props

    return(
      <section className={classes.sectionContainer}>
        <h2 className={classes.sectionTitle}>Por qué estudiar Francés? </h2>
        <Grid container justify="center" alignItems="flex-start" spacing={16} className={classes.cardContainer}>
          {textosPorque.map(porque => (
            <Grid item key={porque.id} className={classes.item}>
              <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <p> {porque.titulo} </p>
                <img src={porque.imagen} className={classes.logoImg} alt='logo representativo del porque de estudiar francés'/>
              </CardContent>
              <CardActions className={classes.cardAction}>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded[porque.id],
                  })}
                  onClick={() => this.handleExpandClick(porque.id)}
                  aria-expanded={this.state.expanded[porque.id]}
                  aria-label="Ver Mas"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={this.state.expanded[porque.id]} timeout="auto" unmountOnExit className={classes.collapse}>
                <CardContent>
                  <p>{porque.texto}</p>
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

export default withStyles(porqueStyles)(Porque);
