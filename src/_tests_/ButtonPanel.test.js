import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ButtonPanel from '../components/ButtonPanel';

jest.mock('../components/Group', () => function Group() {
  return <h3>Hello world</h3>;
});
test('renders Group component', () => {
  render(<BrowserRouter><ButtonPanel /></BrowserRouter>);
  const AppTitle = screen.getAllByText(/Hello world/i);
  expect(AppTitle).toHaveLength(5);
});