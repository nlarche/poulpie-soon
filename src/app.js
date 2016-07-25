import React from 'react';

import Header from './components/header';
import Section from './components/section';
import Footer from './components/footer';
import Subscribe from './components/subscribe';
//import Image from './style/image.css';

export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {

    const app = [
      {
        id: 1,
        image: "./image/diver.jpeg",
        text1: 'Réseau de plongeur',
        text2: 'Divers network',
      },
      {
        id: 2,
        image: "./image/diver-sun.jpg",
        text1: 'Réservez et plongez',
        text2: 'Click & Dive',
      },
      {
        id: 3,
        image: "./image/diver.jpg",
        text1: 'texte test',
        text2: 'test',
      }
    ];

    return (
      <div>
        <Header />
        <div className="section">
          <div className="container">
            <div className="tile is-ancestor" >
              {app.map(s => <Section  key={s.id} image={s.image}
                text1={s.text1} text2={s.text2} />) }
            </div>
          </div>
        </div>
        <Subscribe />
        <Footer />
      </div>
    );
  }
}
