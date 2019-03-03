import { fontPopins, imgResponsive, redClaro, grisViolaseo, red } from '../general-styles.js';
import imagen from '../images/paris-back-5.jpg';

const delfStyles = {
  sectionContainer:{
    backgroundImage: `url(${imagen})`,
    backgroundSize: 'cover',
    backgroundPosition: '10% bottom',
    padding: '9rem 0',
    '@media (min-width: 600px)':{
      backgroundAttachment: 'fixed',
    }
  },
  textContainer:{
    margin: '0 9rem',
    background: 'rgba(216, 233, 240, 0.88)',
    padding: '2rem 4rem',
    borderRadius: '4px',
    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    ...fontPopins,
    '@media (max-width: 960px)': {
        margin: '1rem',
    },
    '@media (max-width: 540px)': {
        padding: '2rem'
    },
  },
  icon:{
    ...imgResponsive,
    maxWidth: '17%',
    '@media (max-width: 600px)': {
        display: 'none'
    },
  },
  textHeader:{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& p':{
      fontWeight: '400',
      fontSize: '2rem',
      lineHeight: '1.2',
      color: grisViolaseo,
      '@media (max-width: 600px)': {
          fontSize: '1.4rem'
      },
    },
    '& span':{
      display: 'block',
      fontWeight: '800',
      fontSize: '3rem',
      marginBottom: '20px',
      color: redClaro,
      '@media (max-width: 600px)': {
          fontSize: '2rem'
      },
    },
  },
  textBody:{
    textAlign: 'center',
    lineHeight: '1',
    '& > h2':{
      color: grisViolaseo,
      fontSize: '4rem',
      '& > span':{
        color: red,
      },
      '@media (max-width: 600px)': {
          fontSize: '2rem'
      },
    }
  },
  sesion:{
    color: redClaro,
    fontWeight: '600',
    position: 'relative',
    display: 'inline-block',
    fontSize: '1.4rem',
    '&::after':{
      content: '" "',
      position: 'absolute',
      left: '35%',
      bottom: '-10px',
      height: '3px',
      backgroundColor: redClaro,
      width: '30%',
    }
  },
  text:{
    ...fontPopins,
    color: grisViolaseo,
    fontSize: '1.6rem',
    fontWeight: '400',
    '@media (max-width: 600px)': {
        fontSize: '1rem'
    },
  },
  textFooter:{
    textAlign: 'center',
    '& > p':{
        borderTop: '1px solid #e8bdbc',
        borderBottom: '1px solid #e8bdbc',
        display: 'inline-block',
        padding: '.7rem',
        fontWeight: '500',
        fontSize: '1.1rem',
        color: redClaro,
    },
    '@media (max-width: 600px)': {
        fontSize: '1rem'
    },
  }
}
export default delfStyles;
