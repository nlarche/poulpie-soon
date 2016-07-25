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
        <div className="hero-header">
          <div className="container">
            <div className="nav">
              <div className="nav-left">
                <p className="nav-item">
                  Poulpie
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <p className={imageCalss}>
              <img src="./image/poulpie.svg" alt={this.props.image} />
            </p>
            <h1 className="title">Plongez connectez</h1>
          </div>
        </div>
      </section>
    );
  }
}