import { getRole, getRoleOldWay, getRoleNCO } from '../src/nullish-coalescing-operator';
describe('Testing nullish coalescing operator - returns a second operand if first operand is null or undefined only', () => {
  it('getRole returns the first value only if is not falsy value', () => {
    expect(getRole({})).toEqual('Default');
    expect(getRole({ role: null })).toEqual('Default');
    expect(getRole({ role: '' })).toEqual('Default');
  });

  it('getRoleOldWay returns the Default value only if first operand is null or undefined', () => {
    expect(getRoleOldWay({})).toEqual('Default');
    expect(getRoleOldWay({ role: null })).toEqual('Default');
    expect(getRoleOldWay({ role: '' })).toEqual('');
  });

  it('getRoleNCO returns the Default value only if first operand is null or undefined', () => {
    expect(getRoleNCO({})).toEqual('Default');
    expect(getRoleNCO({ role: null })).toEqual('Default');
    expect(getRoleNCO({ role: '' })).toEqual('');
  });
});