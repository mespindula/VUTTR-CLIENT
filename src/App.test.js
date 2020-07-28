import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  let text = $(".form-control").getText()
  assert.equal(text, 'Search')
});
