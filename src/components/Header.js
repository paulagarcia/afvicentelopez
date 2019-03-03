import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
// Personal styles
import header from '../styles/header';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;


class Header extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const links = [
      {
        texto: 'Quiénes Somos?',
        link: '/#Quines-Somos?'
      },
      {
        texto: 'Por qué estudiar Francés?',
        link: '/#Porque-estudiar-Francés?'
      },
      {
        texto: 'DELF-DALF',
        link: '/#DELF-DALF'
      },
      {
        texto: 'Traducciones e interpretaciones',
        link: '/#Traducciones-Interpretaciones'
      },
      {
        texto: 'Instituciones Afiliadas',
        link: '/#Instituciones-Afiliadas'
      },
      {
        texto: 'Contáctanos',
        link: '/#Contacto'
      },
      {
        texto: 'Datos de Contacto',
        link: '/#Datos-de-contacto'
      },
    ]


    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          SlideProps={{ unmountOnExit: true }}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose} className={classes.cerrarBoton}>
              <ClearIcon className={classes.closeButton} />
            </IconButton>
          </div>

          <List className={classes.lista}>
            {links.map((link, index) => (
              <a href={link.link} key={index} onClick={this.handleDrawerClose}>
                <ListItem button key={index}>
                  <ListItemText primary={link.texto} className={classes.listaItem} />
                </ListItem>
              </a>
            ))}
            <Link to='/cursos' onClick={this.handleDrawerClose}>
              <ListItem button>
                <ListItemText primary='Cursos' className={classes.listaItem} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(header)(Header);
