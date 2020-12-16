import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../components/Quote';
import renderer from 'react-test-renderer';


test('first snapshot test', () => {
  const component = renderer.create(
    <BrowserRouter><Quote /></BrowserRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
