import * as ActionCreators from './weatherActions';
import { expect } from 'chai';

describe('Actions', () => {
    
  it('should return a function', () => {
    // we expect this to return a function since it is a thunk
    let thunk = ActionCreators.getWeather();
    expect(typeof (thunk)).to.equal('function');
  });
  
});