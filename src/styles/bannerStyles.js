import { boxShadow, sectionContainer, boton, imgResponsive, fontPopins, redClaro, grisViolaseo, sectionTitle } from '../general-styles.js';
import bannerFoto from '../images/banner-4.jpg';
const bannerStyles = {
  sectionContainer:{
    ...sectionContainer
  },
  container: {
    backgroundImage: `url(${bannerFoto})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom center',
    borderRadius: '4px',
    ...boxShadow
  },
  textContainer:{
    padding: '2rem',
    textAlign: 'center',
    background: 'rgba(242, 242, 242, 0.788235294117647)',
    '& p':{
      ...fontPopins,
      fontSize: '1.4rem',
      marginBottom: '0',
      marginTop: '7px',
      fontWeight: '500',
      '& span':{
        fontWeight: '700',
      }
    }
  },
  imgResponsive:{
    ...imgResponsive
  },
  button:{
    ...boton
  },
  textoOscuro:{
    color: grisViolaseo,
  },
  textoRosa:{
    color: redClaro,
    fontWeight: '500',
  },
  textoConLineas:{
    borderTop: '2px dashed #9b9faa',
    borderBottom: '2px dashed #9b9faa',
    margin: '40px 20px!important',
    color: grisViolaseo,
    padding: '5px 0',
  },
  bigText: {
    ...sectionTitle,
    fontSize: '3rem !important',
    color: redClaro,
    marginBottom: '3.4rem',
    '&:after':{
      left: '45%',
    }
  },
  bigTextRosa:{
    fontSize: '1.8rem!important',
    color: grisViolaseo,
    marginTop: '2rem!important',
    '@media (min-width: 960px )':{
      fontSize: '3rem',
    }
  },
  textoGrande:{
    fontSize: '1.7rem !important',
    marginTop: '2rem!important',
    marginBottom: '2rem!important',
    fontWeight: '800!important',
    color: redClaro,
  }

}
export default bannerStyles;
