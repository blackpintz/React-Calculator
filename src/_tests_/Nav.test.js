import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav';

test('first snapshot test', () => {
  const component = renderer.create(
    <BrowserRouter><Nav /></BrowserRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
