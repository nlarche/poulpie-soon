import React from 'react';

export default class Media extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <article className="media is-fullwidth">
        <div className="media-left">
          <p className="image is-128x128">
            <img src={this.props.image} alt={this.props.image} />
          </p>
        </div>
         <div className="media-content">
            <div className="content">
              <h1 className="title" >{this.props.text1}</h1>
              <span className="subtitle" > {this.props.text2}</span>
          </div>
        </div>
      </article>
    );
  }
}
