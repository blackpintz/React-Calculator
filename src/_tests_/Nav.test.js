import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Nav';
import renderer from 'react-test-renderer';


test('first snapshot test', () => {
  const component = renderer.create(
    <BrowserRouter><Nav /></BrowserRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
