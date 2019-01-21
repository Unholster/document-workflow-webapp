import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Workflow from '../components/Workflow/Workflow';

configure({ adapter: new Adapter() });

describe('Workflow.jsx', () => {
  test('test simple', () => {
    const component = shallow(<Workflow doc_id={3} />);
    expect(component.state().states).toEqual([]);
    expect(component.state().transitions).toEqual([]);
  });
});
