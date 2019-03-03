const drawerWidth = 600;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const boxShadow = {
  boxShadow:
    '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
};

const fontPopins = {
  fontFamily: '"Poppins", "Roboto", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};

const fontOpen = {
  fontFamily: '"Open Sans Condensed", "Roboto", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};

const fontRoboto = {
  fontFamily: '"Roboto Condensed", "Roboto", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};

const red = "#f33535";
const redClaro = '#fd5454';
const claro = "#d8e9f0";
const grisOscuro = "#33425b";
const grisNegro = "#29252c";
const grisViolaseo = "#384259";
const fuccia = "#f73859";
const turqueza = "#7ac7c4";
const turquezaClaro = '#c4edde';

const imgResponsive = {
  maxWidth: '100%',
  height: 'auto',
};

const sectionContainer = {
  margin: '0 auto',
  padding: '4rem 4rem 1rem',
  backgroundColor: '#f2f2f2',
  '@media (max-width: 960px)': {
      padding: '4rem 3rem 1rem',
  },
  '@media (max-width: 600px)': {
      padding: '1rem',
  },
};

const sectionTitle = {
  fontFamily: '"Poppins", "Roboto", sans-serif',
  position: 'relative',
  color: grisViolaseo,
  fontSize: '2rem',
  wordWrap: 'break-word',
  lineHeight: '1.3',
  '@media (min-width: 425px)': {
    fontSize: '2.4rem',
  },
  '@media (min-width: 960px)': {
    fontSize: '4rem',
  },
  '&::after': {
    content: '" "',
    position: 'absolute',
    left: '0',
    bottom: '-10px',
    height: '6px',
    backgroundColor: redClaro,
    width: '20%',
    '@media (min-width: 960px)':{
      width: '10%',
    }
  },
}

const textos = {
  fontWeight: '300',
  lineHeight: '1.5em',
  fontSize: '1.25rem',
  color: '#2d2d2d',
  fontFamily: 'Roboto Condensed',
  marginBottom: '1rem',
  '@media (min-width: 750px)':{
      textAlign: 'justify',
  }
}

const extraText = {
  color: redClaro,
  fontWeight: '500',
}

const boton = {
  ...fontPopins,
  cursor: 'pointer',
  width: 'auto',
  height: '65px',
  padding: '0 39px',
  minWidth: '48px',
  borderRadius: '45px',
  marginTop: '25px',
  background: redClaro,
  color: '#f2f2f2',
  fontWeight: '400',
  fontSize: '1.2rem',
  textTransform: 'uppercase',
  '&:hover':{
    background: grisOscuro,
  }
}


export {
  //variables
  drawerWidth,
  transition,
  boxShadow,
  fontPopins,
  fontOpen,
  fontRoboto,
  red,
  redClaro,
  claro,
  grisNegro,
  grisOscuro,
  grisViolaseo,
  fuccia,
  turqueza,
  turquezaClaro,
  imgResponsive,
  sectionContainer,
  sectionTitle,
  textos,
  extraText,
  boton
};
