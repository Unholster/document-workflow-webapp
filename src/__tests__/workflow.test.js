import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Workflow from '../components/Workflow/Workflow';

test('Workflow sections rendering', () => {
  const { getByText } = render(
    <Workflow />,
  );
  expect.anything(getByText('Estado del documento'));
  expect.anything(getByText('Estado actual del documento:'));
  expect.anything(getByText('Transiciones aplicables:'));
});
