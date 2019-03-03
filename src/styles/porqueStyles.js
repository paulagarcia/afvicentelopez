import { sectionContainer, sectionTitle, redClaro, fontPopins, grisViolaseo, fontRoboto, claro, grisOscuro } from '../general-styles.js';

const porqueStyles = {
    sectionContainer:{
      ...sectionContainer,
      paddingBottom: '7rem!important',
      '@media (min-width: 960px)':{
        paddingBottom: '13rem',
      }
    },
    sectionTitle:{
      ...sectionTitle,
      textAlign: 'right',
      '&::after': {
        content: '" "',
        position: 'absolute',
        right: '0',
        bottom: '-10px',
        height: '6px',
        backgroundColor: redClaro,
        width: '10%',
      }
    },
    cardContainer:{
      paddingTop: '2rem',
    },
    item:{
      width: '250px',
      '@media (min-width: 540px)':{
          width: 'calc(100% / 2)',
      },
      '@media (min-width: 750px)':{
        width: 'calc(100% / 3)',
      },
      '@media (min-width: 1140px)':{
        width: 'calc(100% / 4)',
      },
      '@media (min-width: 1280px)':{
        width: 'calc(100% / 5)',
      },
    },
    card:{
      background: claro,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      background: '#ff5954',
      color: '#fff',
      '&:hover':{
        background: claro,
        color: grisOscuro
      },
    },
    expandOpen: {
      transform: 'rotate(180deg)',
      background: claro,
      color: grisOscuro
    },
    cardAction:{
      minHeight: '40px',
      backgroundColor: grisOscuro
    },
    cardContent:{
      height: '250px',
      padding: '6px 12px 0px',
      textAlign: 'center',
      '& > p':{
        ...fontPopins,
        textAlign: 'center',
        color: grisViolaseo,
        fontWeight: '300',
        marginBottom: '0',
        fontSize: '1.1rem'
      }
    },
    logoImg:{
      maxWidth:'140px',
      marginTop: '10px',
      marginBottom: '10px',
    },
    collapse:{
      background: grisOscuro,
      ...fontRoboto,
      color: '#f2f2f2',
      fontSize: '1.1rem',
      '@media (min-width: 750px)':{
        position: 'absolute',
        left: '3rem',
        right: '3rem',
        marginTop: '10px',
        borderRadius: '4px',
      },
      '@media (min-width: 960px)':{
        left: '4rem',
        right: '4rem',
      }
    }

}

export default porqueStyles;
