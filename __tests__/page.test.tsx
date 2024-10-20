import { render } from '@testing-library/react';
import React from 'react';
import Home from '../src/app/page';

describe('Home Page', () => {
  test('should render the home page', () => {
    render(<Home />);
  });
});
