import { simpleDoWithReturning, simpleDoNoReturning, someFactory } from '../src/do-expressions';
describe('Testing Do Expressions - Returns the evaluation of code block', () => {
  it('simpleDoWithReturning returns a Hello World', () => {
    expect(simpleDoWithReturning()).toEqual('Hello world!');
  });

  it('simpleDoNoReturning', () => {
    expect(simpleDoNoReturning()).toBeUndefined();
  });

  it('someFactory', () => {
    expect(someFactory('web')).toEqual('Web Factory');
    expect(someFactory()).toEqual('Other Factory');
  });
});