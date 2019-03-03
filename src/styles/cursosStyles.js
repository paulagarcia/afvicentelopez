import {
  sectionContainer,
  sectionTitle,
  redClaro,
  textos,
  extraText,
  grisOscuro,
  claro,
  fontPopins,
  grisViolaseo,
  fontRoboto,
} from '../general-styles.js';

const cursosStyles = {
  sectionContainer:{
    ...sectionContainer,
    position:'relative',
    paddingTop: '3rem'
  },

  cursosContainer:{
    paddingTop: '3rem',
  },
  sectionTitle:{
    ...sectionTitle
  },
  logo:{
    position: 'absolute',
    right: '1rem',
    width: '50px',
    top: '20px',
    '@media (min-width: 600px)':{
      width: '65px'
    },
    '@media (min-width: 960px)':{
      width: '98px',
      right: '2rem',
    }
  },
  textContainerDiplomas:{
      ...textos,
      position: 'relative',
      paddingBottom: '7rem',
      '@media (min-width: 1140px)':{
          maxWidth: '75%',
      }
  },
  extraText:{
    ...extraText,
    color: grisOscuro,
    fontWeight: '600'
  },
  listDiplomas:{
    listStyle: 'circle',
    color: grisOscuro,
    fontWeight: '600',
  },
  imgBorde2:{
    position:'absolute',
    right: '0',
    top: '15rem',
  },
  cardContainer:{
    paddingTop: '2rem',
  },
  item:{
    maxWidth: '600px',
    '@media (min-width: 720px)':{
      width: 'calc((100% / 2) - 2rem)',
    }
  },
  card:{
    background: claro,
    overflow: 'visible',
    position: 'relative',
    marginBottom: '7rem',
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
    minHeight: '87px',
    backgroundColor: grisOscuro,
    '& p':{
      ...fontPopins,
      color: claro,
      fontSize: '1.4rem',
      paddingLeft: '2rem',
      fontWeight: '500'
    },
  },
  cardContent:{
    minHeight: '510px',
    padding: '6px 12px 0px',
    textAlign: 'center',
    '& > p':{
      ...textos,
      color: grisViolaseo,
      fontWeight: '300',
      marginBottom: '0',
      fontSize: '1.25rem',
      padding: '0 1rem 1rem',
      textAlign: 'left!important',
      '@media (min-width: 1140px)':{
        textAlign: 'justify',
        padding: '0 2rem 0',
      }
    },
    '& h4':{
      ...fontPopins,
      paddingTop: '1rem',
      color: grisOscuro,
      fontWeight: '600',
      fontSize: '2rem',
      marginBottom: '1rem',
      textTransform: 'capitalize',
    }
  },
  collapse:{
    background: grisOscuro,
    ...fontRoboto,
    color: '#f2f2f2',
    fontSize: '1.1rem',
  },
  nombreCurso:{
    ...fontPopins,
    width: '100px',
    height: '100px',
    textAlign: 'center',
    position: 'absolute',
    top: '-50px',
    borderRadius: '50%',
    lineHeight: '2',
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#f2f2f2',
    left: '50%',
    transform: 'translate(-50%)',
    border: '10px solid',
    borderColor: claro,
    background: redClaro,
  },


}

export default cursosStyles;
