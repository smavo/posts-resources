import { updateUser, doOperation } from '../src/throw-expressions';
describe('Testing throw expressions - Throw error in expressions', () => {
  it('updateUser throws error if user is not passed', () => {
    expect(() => updateUser()).toThrow();
    expect(updateUser({})).toBeTruthy();
  });

  it('doOperation throws error parameter is a falsy value', () => {
    expect(() => doOperation()).toThrow();
    expect(doOperation(true)).toBeTruthy();
  });
});