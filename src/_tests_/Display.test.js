import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Display from '../components/Display';

test('renders results from the calculator', () => {
  render(<BrowserRouter><Display /></BrowserRouter>);
  const AppTitle = screen.getByText(/0/i);
  expect(AppTitle).toBeInTheDocument();
});
