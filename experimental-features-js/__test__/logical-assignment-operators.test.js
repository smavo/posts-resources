import { buildUser, replaceCode, addRole } from '../src/logical-assignment-operators';
describe('Testing logical assignment operators - use logical operators in assignments expression', () => {
  it('buildUser set Default role to user if is a falsy value, example using "or" assignment', () => {
    expect(buildUser({})).toHaveProperty('role', 'Default');
    expect(buildUser({ role: 'Developer' })).toHaveProperty('role', 'Developer');
  });

  it('replaceCode set a new code for user only if you have one, example using "and" assignment', () => {
    expect(replaceCode({})).toHaveProperty('code', undefined);
    expect(replaceCode({ code: 787 })).toHaveProperty('code', 777);
  });

  it('addRole add Default role if user.role is null or undefined using "??" assignment', () => {
    expect(addRole({})).toHaveProperty('role', 'Default');
    expect(addRole({ role: '' })).toHaveProperty('role', '');
  });
});