
import test from 'ava';

import React from 'react';
import { render } from 'react-dom';
import Footer from '../footer.js';

test('render footer', t => {
  const div = renderToDiv();
  t.true(div.innerHTML.includes('footer'));
  t.true(div.innerHTML.includes('Poulpie'));
});

function renderToDiv(props) {
  const div = document.createElement('div');
  render(
    <Footer {...props} />,
    div
  );
  return div;
}

