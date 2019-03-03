import React from 'react';
import LandingPage from './LandingPage';
import QuienesSomos from './QuienesSomos';
import Porque from './Porque';
import DelfDalf from './DelfDalf';
import Traducciones from './Traducciones';
import Instituciones from './Instituciones';
import Contacto from './Contacto';
import Banner from './Banner';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor';


const Home = () => {
  configureAnchors({offset: 10, scrollDuration: 300})

  return(
    <React.Fragment>
      <LandingPage />
      <ScrollableAnchor id={'Quines-Somos?'}>
        <QuienesSomos />
      </ScrollableAnchor>
        <Banner />
      <ScrollableAnchor id={'Porque-estudiar-Francés?'}>
        <Porque />
      </ScrollableAnchor>
      <ScrollableAnchor id={'DELF-DALF'}>
        <DelfDalf />
      </ScrollableAnchor>
      <ScrollableAnchor id={'Traducciones-Interpretaciones'}>
        <Traducciones />
      </ScrollableAnchor>
      <ScrollableAnchor id={'Instituciones-Afiliadas'}>
        <Instituciones />
      </ScrollableAnchor>
      <ScrollableAnchor id={'Contacto'}>
        <Contacto />
      </ScrollableAnchor>
    </React.Fragment>
  )
}


export default Home;
