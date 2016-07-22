import React from 'react';

export default class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="footer" >
        <div className="container has-text-centered">
          <span className="column" >Logo</span>
          <span className="column" >Poulpie</span>
          <span className="column" >© 2016</span>
        </div>
      </div>
    );
  }
}
