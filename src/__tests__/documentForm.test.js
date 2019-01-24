import React from 'react';
import { configure } from 'enzyme';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
import Document1 from '../components/Documents/Document1Edit';

configure({ adapter: new Adapter() });

test('Both document sections are rendered', () => {
  const { getByPlaceholderText } = render(
    <Document1 />,
  );

  expect.anything(getByPlaceholderText('Nombre'));
  expect.anything(getByPlaceholderText('Apellido'));
  expect.anything(getByPlaceholderText('100.000'));
  expect.anything(getByPlaceholderText('Descripción aproximada del detalle del trabajo.'));
});
