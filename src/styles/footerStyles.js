import {
  sectionContainer,
  imgResponsive,
  claro,
  sectionTitle,
  redClaro,
  fontPopins,
  grisViolaseo,
} from '../general-styles.js';
import mapa from '../images/mapa-3.png';
import mapaXs from '../images/mapa-mobile.png';
import mapaSm from '../images/mapa-sm.png';

const footerStyles = {
  footer:{
    backgroundColor: claro,
    position: 'relative',
  },
  sectionTitle:{
    ...sectionTitle,
    marginTop: '6rem',
    textAlign: 'right',
    lineHeight: '1',
    '@media (min-width: 960px)':{
        marginBottom: '0rem',
        marginTop: '1rem',
        fontSize: '3.7rem'
    },
    '&::after': {
      content: '" "',
      position: 'absolute',
      right: '0',
      height: '6px',
      width: '20%',
      bottom: '-15px',
      backgroundColor: redClaro,
      '@media (min-width: 600px)':{
          width: '10%',

      },
    }
  },
  sectionContainer:{
    ...sectionContainer,
    backgroundColor: claro,
    backgroundImage: `url(${mapaXs})`,
    padding: '1rem',
    backgroundSize: 'cover',
    '@media (min-width: 960px)':{
      paddingTop: '12rem',
      backgroundImage: `url(${mapaSm})`,
    },
    '@media (min-width: 1200px)':{
      paddingTop: '12rem',
      backgroundImage: `url(${mapa})`,
    },
  },
  imgResponsive:{
    ...imgResponsive,
    position: 'absolute',
  },
  mapLink:{
    width: '100%',
    display: 'block',
    height: '20rem',
  },
  contactContainer:{
    ...fontPopins,
    textAlign: 'right',
    '& a':{
      textDecoration: 'none'
    },
    '& p':{
      fontWeight: '600',
      fontSize: '1.4rem',
      color: grisViolaseo,
      lineHeight: '1.5',
      '@media (max-width: 600px)':{
        fontSize: '1.2rem'
      }
    }
  },
  subFooter:{
    padding: '1rem',
    backgroundColor: claro,
    ...fontPopins,
    color: grisViolaseo,
    '@media (max-width: 600px)':{
      fontSize: '0.8rem',
      padding: '1rem'
    },
    '& a':{
      textDecoration: 'none',
      color: grisViolaseo
    }
  },
  socialIcon:{
    ...imgResponsive,
    maxWidth: '68px',
    marginLeft: '1.5rem',
    marginTop: '0rem',
    marginBottom: '2rem'
  }
}

export default footerStyles;
