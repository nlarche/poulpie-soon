import React from 'react';

export default class Subscribe extends React.Component {
  constructor() {
    super();
  }
  render() {
    const mailChimpUrl = "//poulpie.us13.list-manage.com/subscribe/post?u="
       + "65072aaa3e4590d331363a94d&amp;id=2ad571c40b";

    const fakeInputStyle = {
      position: 'absolute',
      left: '-5000px'
    };
    return (
      <section className="hero is-info is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-one-third is-left">
                <p className="title">Poulpie <strong>Newsletter</strong></p>
              </div>
              <div className="column">
                <form action={mailChimpUrl}
                  method="post"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate
                  >
                  <div className="control is-grouped">
                    <div className="control has-icon">
                      <input type="email"
                        name="EMAIL"
                        className="email input is-expanded"
                        id="mce-EMAIL"
                        placeholder="email address"
                        />
                      <div style={fakeInputStyle} aria-hidden="true">
                        <input type="text"
                          name="b_65072aaa3e4590d331363a94d_2ad571c40b"
                          tabIndex="-1"
                          />
                      </div>
                      <i className="fa fa-envelope" ></i>
                    </div>
                    <div className="control">
                      <input type="submit"
                        value="ok"
                        name="subscribe"
                        className="button is-primary"
                        />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }
}
