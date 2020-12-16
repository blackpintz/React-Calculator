import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('first snapshot test', () => {
  const component = renderer.create(
    <BrowserRouter><Home /></BrowserRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
