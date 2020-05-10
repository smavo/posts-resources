import {
  multiply3,
  multiply2OldWay,
  multiply2PA,
  multiply1OldWay,
  multiply1PA,
  multiply2PAF,
  multiply1PAF,
  multiplyRTL,
  multiplyLTR,
  multiplyMiddle,
  setRole,
  setRoleDeveloperOldWay,
  setRoleDeveloperPA
} from '../src/partial-application';
describe('Testing partial application - returns function with default parameters we set and define placeholder to receive parameters in the function returned', () => {
  it('setRol returns object with role defined', () => {
    const user = {};
    const role = 'Developer';
    expect(setRole(role, user)).toHaveProperty('role', role);
  });

  it('setRoleDeveloperOldWay returns object with developer role', () => {
    const user = {};
    const role = 'Developer';
    expect(setRoleDeveloperOldWay(user)).toHaveProperty('role', role);
  });

  it('setRoleDeveloperPA returns object with rol developer', () => {
    const user = {};
    const role = 'Developer';
    expect(setRoleDeveloperPA(user)).toHaveProperty('role', role);
  });

  it('multiply3 returns a the multiplication of 3 number', () => {
    expect(multiply3(1, 2, 3)).toEqual(6);
  });

  it('multiply2OldWay and multiply2PA have binded the first parameter with one', () => {
    expect(multiply2OldWay(2, 3)).toEqual(6);
    expect(multiply2PA(2, 3)).toBeNaN();
  });

  it('multiply1OldWay and multiply1PA have binded the second parameter with 2 (was created binding multiply2OldWay and multiply2PA)', () => {
    expect(multiply1OldWay(3)).toEqual(6);
    expect(multiply1PA(3)).toBeNaN();
  });

  it('multiply2PAF bind first parameters and 2 placeholders and multiply1PAF is based in multiply2PAF and bind first parameters', () => {
    expect(multiply2PAF(2, 3)).toEqual(6);
    expect(multiply1PAF(3)).toEqual(6);
  });

  it('partial application multiply3 rigth-to-left, left-to-right and middle', () => {
    expect(multiplyRTL(1, 2)).toEqual(6);
    expect(multiplyLTR(2, 3)).toEqual(6);
    expect(multiplyMiddle(2)).toEqual(6);
  });
});