import React from 'react';

export default class Subscribe extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="hero is-info is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-one-third is-left">
                <p className="title">Poulpie <strong>Newsletter</strong></p>
              </div>
              <div className="column">
                <div className="control is-grouped">
                  <div className="control has-icon">
                    <input type="text" className="input" placeholder="email" />
                    <i className="fa fa-envelope" ></i>
                  </div>
                  <div className="control">
                    <input type="submit" value="ok" className="button is-primary"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
