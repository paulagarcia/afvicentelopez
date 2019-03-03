import {
  sectionContainer,
  sectionTitle,
  grisOscuro,
  boton,
  boxShadow,
  redClaro,
  fontPopins,
  claro
} from '../general-styles.js';

import paris from '../images/form-foto.jpg'

const contactStyles = {
  sectionContainer:{
    ...sectionContainer,
    paddingTop: '7rem',
    paddingBottom: '6rem !important',
  },
  sectionTitle:{
    ...sectionTitle,
    marginBottom: '6.9rem',
    fontSize: '2rem',
    color: claro,
    '@media (min-width: 425px)':{
      marginBottom: '6rem',
      fontSize: '2.4rem'
    }
  },
  imageContainer:{
    backgroundImage: `url(${paris})`,
    backgroundSize: 'cover',
    opacity: '0.4',
    padding: '9rem 0',
    minHeight: '600px',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
  },
  formContainer:{
    borderRadius: '4px',
    background: grisOscuro,
    position: 'relative',
    padding: '0rem 2rem 2rem',
    '@media (min-width: 600px)':{
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px',
    },
    '@media (min-width: 1140px)':{
      padding: '0rem 5rem 4rem 4rem',
    }
  },
  button:{
    ...boton,
    minWidth: '220px',
    '&:hover':{
      background: claro,
      color: grisOscuro
    }
  },
  container:{
    ...boxShadow
  },
  cssLabel:{
    color: '#f2f2f2',
    ...fontPopins,
    lineHeight: '1em',
    fontSize: '1.2rem',
    paddingLeft: '0.5rem',
    '&$cssFocused': {
      color: '#f2f2f2',
    },
  },
  cssFocused:{},
  cssOutlinedInput:{
    color: '#f2f2f2',
    padding: '0rem',
    ...fontPopins,
    fontSize: '1.2rem',
    fontWeight: '400',
    borderColor: '#f2f2f2',
    marginBottom: '2rem',
    position: 'relative',
    '& textarea':{
      padding: '1rem',
    },
    '&:not($cssFocused) $notchedOutline':{
      borderColor: '#f2f2f2'
    },
    '&$cssFocused $notchedOutline': {
      borderColor: redClaro,
      color: '#f2f2f2',
      fontSize: '1rem',
    },
    '&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline': {
        borderWidth: '1px',
        borderColor: redClaro
      },
    },
    textField:{
    '& > p':{
      position: 'absolute',
      color: redClaro,
      ...fontPopins,
      bottom: '5px',
      fontSize: '1rem',
      marginLeft: '0'
    }
  },

  notchedOutline:{},
  disabled: {},
  error: {},
  icono:{
    position: 'absolute',
    top: '93px',
    right: '2rem',
    maxWidth: '85px',
    '@media (min-width: 960px)':{
      top: '133px',
      maxWidth: '100px',
    },
    '@media (min-width: 1140px)':{
        right: '5rem',
        top: '114px',
        maxWidth: '120px',
    }
  },

  mensajeContainer:{
    '& > div':{
      ...fontPopins,
      fontSize: '1rem',
      color: grisOscuro,
      fontWeight: '500',
      background: claro,
      borderRadius: '4px',
      borderLeft: '6px solid #32425b',
      '& > div':{
        maxWidth: '75%',
        '@media (min-width:425px)':{
          maxWidth: 'none'
        }
      },
      '@media (min-width: 600px)':{
        fontSize: '1.1rem',
      }
    }
  }
}

export default contactStyles;
