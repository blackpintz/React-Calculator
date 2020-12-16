import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Button from '../components/Button';

test('renders with a className called button', () => {
  const { container } = render(<BrowserRouter><Button /></BrowserRouter>);
  expect(container.firstChild).toHaveClass('button');
});
