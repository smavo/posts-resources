import { getAccountId, getAccountIdOldWay, getAccountIdChaining } from '../src/optional-chaining';
describe('Testing optional chaining - access to nested properties in object avoiding errors', () => {
  it('getAccountId throws an error when user is null, undefined or we access more than one nested property', () => {
    expect(() => getAccountId() ).toThrow();
    expect(() => getAccountId(null)).toThrow();
    expect(() => getAccountId({})).toThrow();
  });

  it('getAccountIdOldWay avoids throws error using && operator and returns a falsy value', () => {
    expect(getAccountIdOldWay()).toBeFalsy();
    expect(getAccountIdOldWay(null)).toBeFalsy();
    expect(getAccountIdOldWay({})).toBeFalsy();
  });

  it('getAccountIdChaining avoids throws error using ? and returns a falsy value', () => {
    expect(getAccountIdChaining()).toBeUndefined();
    expect(getAccountIdChaining(null)).toBeUndefined();
    expect(getAccountIdChaining({})).toBeUndefined();
  });

  it('getAccountIdChaining and getAccountIdOldWay works returning the last part they can access, the only difference is working with null because is object and a falsy value', () => {
    expect(getAccountIdOldWay(null)).toBeNull();
    expect(getAccountIdChaining(null)).toBeUndefined();
  });
});