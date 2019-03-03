import {boton, sectionContainer, fontPopins, grisOscuro} from '../general-styles.js';
import imagen from '../images/fondo-7.png';

const landingStyles = {
  landingContainer:{
    minHeight: '105vh',
    backgroundImage: `url(${imagen})`,
    backgroundSize: 'cover',
    backgroundColor: '#f2f2f2',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundPosition: 'center center',
    '@media (min-width: 960px)':{
      minHeight: '115vh',
    }
  },
  sectionContainer:{
    ...sectionContainer,
    backgroundColor: 'transparent',
    paddingTop: '0',
    marginTop: '0',
    '@media (min-width: 960px)':{
      marginTop:'-8rem',
    }
  },
  homeTitulo:{
    ...fontPopins,
    fontWeight: '800',
    fontSize: '3rem',
    color: grisOscuro,
    lineHeight: '1.3',
    width: '100%',
    padding: '0',
    margin: '0',
    '@media (min-width: 960px)':{
      fontSize: '5rem',
      width: '57%',
    }
  },
  logo:{
    position: 'absolute',
    right: '2rem',
    width: '65px',
    top: '2%',
    '@media (min-width: 600px)':{
      width: '98px',
      top: '3%',
    }
  },
  button:{
    ...boton,
  }

}

export default landingStyles;
