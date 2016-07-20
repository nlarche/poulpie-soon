import React from 'react';

import Styles from './section.css';

export default class Section extends React.Component {
  constructor() {
    super();
  }
  render() {

    const classe = Styles.container + ' ' + this.props.background;
    return (
      <div className={classe} >
          <div className={Styles.text} >
            <h1 className={Styles.title} >{this.props.text1}</h1>
            <span className={Styles.subtitle} >{this.props.text2}</span>
          </div>
      </div>
    );
  }
}
