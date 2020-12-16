import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import renderer from 'react-test-renderer';


test('first snapshot test', () => {
  const component = renderer.create(
    <BrowserRouter><Home /></BrowserRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
