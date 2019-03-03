import { sectionContainer, sectionTitle, textos, extraText, boton } from '../general-styles.js';

const textSectionStyles = {
  sectionContainer:{
    ...sectionContainer,
    position: 'relative',
    paddingTop: '1rem',
    '& > p':{
      ...textos,
      position: 'relative',
      maxWidth: '800px',
      '& > span':{
        ...extraText,
      },
    }
  },
  sectionTitle:{
    ...sectionTitle
  },
  button:{
    ...boton,
  },
  imgBorde:{
    position: 'absolute',
    right: '0',
    top: '-9rem',
  },
  imgBorde2:{
    position: 'absolute',
    right: '0',
  },

}

export default textSectionStyles;
