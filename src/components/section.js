import React from 'react';

import Style from './section.css';

export default class Section extends React.Component {
  constructor() {
    super();
  }
  render() {

    const cardClasses = "card is-128x128 " + Style.cardMobile;

    return (
      <div className="tile is-parent" >
        <div className="tile is-child" >
          <div className="card is-128x128 is-fullwidth">
            <header className="card-header">
              <p className="card-header-title">
                {this.props.text1}
              </p>
              <a className="card-header-icon">
                <i className="fa fa-angle-down"></i>
              </a>
            </header>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={this.props.image} alt={this.props.image} />
              </figure>
            </div>
            <div className="card-content" >
              <span className="subtitle" >{this.props.text2}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
