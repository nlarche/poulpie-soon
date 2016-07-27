
import test from 'ava';

import React from 'react';
import { render } from 'react-dom';
import Subscribe from '../subscribe.js';

test('render subscribe', t => {
  const div = renderToDiv();
  // mailchimp id
  t.true(div.innerHTML.includes('2ad571c40b'));
});

function renderToDiv(props) {
  const div = document.createElement('div');
  render(
    <Subscribe {...props} />,
    div
  );
  return div;
}

