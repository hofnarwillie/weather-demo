import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Header from './Header';
import { Navbar } from 'react-bootstrap';

describe('<Header />', () => {
  it('should compile and contain a <Navbar /> component', () => {
    const wrapper = shallow(<Header />);
    const grid = wrapper.find(Navbar);
    expect(grid).to.be.length(1);
  });
});