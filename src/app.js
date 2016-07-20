import React from 'react';

import Menu from './components/menu';
import Section from './components/section';
import Footer from './components/footer';
import Image from './style/image.css';
import Styles from './app.css';

export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {

    const app = [
      {
        id: 1,
        background: Styles.firstSection,
        text1: 'Réseau de plongeur',
        text2: 'Divers network',
      },
      {
        id: 2,
        background: Image.deepwater,
        text1: 'Réservez et plongez',
        text2: 'Click & Dive',
      },
      {
        id: 3,
        background: Image.seabed,
        text1: 'Bientôt - Soon',
      }
    ];

    return (
      <div className={Styles.container}>
        <Menu />
        {app.map(s => <Section key={s.id} background={s.background}
          text1={s.text1} text2={s.text2} />) }
         <Footer />
      </div>
    );
  }
}
