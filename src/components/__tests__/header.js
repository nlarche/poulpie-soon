
import test from 'ava';

import React from 'react';
import { render } from 'react-dom';
import Header from '../header.js';

test('render header', t => {
  const div = renderToDiv();
  t.true(div.innerHTML.includes('img'));
  t.true(div.innerHTML.includes('Poulpie'));
});

function renderToDiv(props) {
  const div = document.createElement('div');
  render(
    <Header {...props} />,
    div
  );
  return div;
}

