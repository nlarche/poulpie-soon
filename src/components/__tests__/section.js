
import test from 'ava';

import React from 'react';
import { render } from 'react-dom';
import Section from '../section.js';

test('render section', t => {

  const props = {
    text1: 'the text1',
    text2: 'a text2',
    image: 'an image',
  };

  const div = renderToDiv(props);
  t.true(div.innerHTML.includes(props.text1));
  t.true(div.innerHTML.includes(props.text2));
  t.true(div.innerHTML.includes(props.image));
});

function renderToDiv(props) {
  const div = document.createElement('div');
  render(
    <Section {...props} />,
    div
  );
  return div;
}

