import React from 'react';

import Menu from './components/menu';
import Section from './components/section';
import Footer from './components/footer';
import Media from './components/media';
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
        image:  "./image/diver-sun.jpg",
        text1: 'Réservez et plongez',
        text2: 'Click & Dive',
      }
    ];

    return (
      <div className="layout-default">
        <Menu />
        <div className="section">
          {app.map(s => <Media key={s.id} image={s.image}
            text1={s.text1} text2={s.text2} />) }
        </div>
        <div className="section">
          {app.map(s => <Section key={s.id} image={s.image}
            text1={s.text1} text2={s.text2} />) }
        </div>
        <div className="control is-grouped">
          <div className="control  has-icon">
            <input type="text" className="input" placeholder="email" />
            <i className="fa fa-envelope" ></i>
          </div>
          <div className="control">
            <input type="submit" value="ok" className="button is-primary"/>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
