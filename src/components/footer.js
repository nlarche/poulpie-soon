import React from 'react';

import Styles from './footer.css';
import Image from '../style/image.css';

export default class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={Styles.container} >
        <div className={Styles.form} >
          <input type="text" placeholder="Adresse email - email Address" className={Styles.input}/>
          <input type="submit" value="Ok" className={Styles.submit} />
        </div>
        <div className={Styles.footer} >
          <span>Logo</span>
          <span>Poulpie</span>
          <span>© 2016</span>
        </div>
      </div>
    );
  }
}
