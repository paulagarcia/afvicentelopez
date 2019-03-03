import {sectionContainer,
        sectionTitle,
        textos,
        redClaro,
        claro,
        grisOscuro,
        boxShadow
} from '../general-styles.js';

const institucionesStyles = {
    sectionContainer:{
      ...sectionContainer,
      position: 'relative'
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
    textContainer:{
      maxWidth: '820px',
      textAlign: 'right',
      position: 'relative',
      '& > p':{
        ...textos,
        textAlign: 'rigth',
      }
    },
    listContainer:{
      display: 'flex',
      padding: '2rem',
      borderRadius: '4px',
      marginTop: '3rem',
      background: claro,
      width: '100%',
      position: 'relative',
      justifyContent: 'space-between',
      borderLeft: '5px solid',
      borderColor: grisOscuro,
      flexWrap: 'wrap',
      ...boxShadow,
      '@media (max-width: 450px)':{
        flexDirection: 'column'
      },
      '& div':{
        width: 'calc((100% / 3) - 5px)',
        '@media (max-width: 960px)':{
          width: 'calc(50% - 5px)',
        },
        '@media (max-width: 450px)':{
          width: 'calc(100% - 5px)',
        },
      },
      '& p':{
        ...textos,
        marginBottom: '6px',
        marginTop:'0px',
        fontSize: '1.1rem',
        textAlign: 'left!important'
      }
    },
    boxContainer:{
      display: 'flex',
      justifyContent: 'flex-end',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    icon:{
      position: 'absolute',
      maxWidth: '143px',
      right: '-10px',
      top: '-45px',
      '@media (min-width: 451px) and (max-width: 960px)':{
        right: '5px',
        bottom: '0',
        top: 'inherit'
      },
      '@media (max-width: 450px)':{
        right: '-6px',
        top: '-68px',
        maxWidth: '110px'
      },
    },
    imgBorde3:{
      position: 'absolute',
      left: '0',
    }


}

export default institucionesStyles;
