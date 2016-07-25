import React from 'react';

export default class Section extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="tile is-child" >
        <div className="card is-128x128">
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
    );
  }
}
