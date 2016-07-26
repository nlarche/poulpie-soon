import React from 'react';

import Style from './header.css';

export default class Header extends React.Component {
  constructor() {
    super();
  }
  render() {

    const imageCalss = 'image ' + Style.logo;

    return (
      <section className="hero is-info has-text-centered">
        <div className="container">
          <div className="hero-header">
            <div className="nav">
              <div className="nav-left">
                <p className="nav-item">
                  Poulpie
                </p>
              </div>
            </div>

          </div>
          <div className="hero-body">
            <div className="tile is-ancestor">
              <div className="tile is-child ">
                <p className={imageCalss}>
                  <img src={this.props.logo} alt={this.props.image} />
                </p>
                <h1 className="title">Plonger connecté</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
