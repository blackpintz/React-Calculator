import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Group from '../components/Group';

test('renders Button component', () => {
  render(<BrowserRouter><Group group={['3']} /></BrowserRouter>);
  const AppTitle = screen.getByText(/3/i);
  expect(AppTitle).toBeInTheDocument();
});