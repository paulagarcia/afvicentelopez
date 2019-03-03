import {drawerWidth, grisOscuro, claro, fontPopins} from '../general-styles.js';

const header = {
  root: {
    display: 'flex',
  },
  appBar: {
    background: 'transparent',
    boxShadow: 'none',
    maxWidth: '1920px',
    '@media (min-width: 1920px)':{
      left: 'calc((100vw - 1920px) / 2)'
    },
  },
  appBarShift: {
    maxWidth: '100%',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,

  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
    color: grisOscuro,
    '@media (max-width: 600px)':{
      marginLeft: '0',
      background: 'rgba(242, 242, 242, 0.60)'
    },
    '& svg':{
      '@media (min-width: 600px)':{
        width: '3rem',
        height: '3rem'
      }
    }
  },
  hide: {
    display: 'none',
  },
  drawer: {
    maxWidth: '100%',
    width: drawerWidth,
  },
  drawerPaper: {
    maxWidth: '100%',
    width: drawerWidth,
    background: grisOscuro,
    borderRight: 'none',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    justifyContent: 'flex-end',
  },
  cerrarBoton:{
    '@media (max-width: 750px)':{
      position: 'relative',
      top: '30px',
      right: '15px'
    },
  },
  closeButton:{
    color: claro,
    height: '3rem',
    width: '3rem',
    margin: '0',
  },
  lista:{
    paddingTop: '2.5rem',
    '& a':{
      textDecoration: 'none',
    }
  },
  listaItem:{
    '& span':{
    ...fontPopins,
    color: claro,
    fontSize: '1.5rem',
    lineHeight: '2',
    textAlign: 'center',
    '@media (max-width: 600px)':{
      fontSize: '1.2rem',
      lineHeight: '1.5',
    }
  }
  }
}

export default header;
