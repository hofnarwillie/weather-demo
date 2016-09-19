import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Footer from './Footer';
import { Grid } from 'react-bootstrap';

describe('<Footer />', () => {
  it('should compile and contain a <Grid /> component', () => {
    const wrapper = shallow(<Footer />);
    const grid = wrapper.find(Grid);
    expect(grid).to.be.length(1);
  });
});