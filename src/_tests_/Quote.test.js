import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

test('first snapshot test', () => {
  const component = renderer.create(
    <BrowserRouter><Quote /></BrowserRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
