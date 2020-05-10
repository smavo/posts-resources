import { createUser } from '../src/pipeline-operator';

describe('Testing Pipeline operator - Returns the value who has been passed for a serie of functions (basically like composition)', () => {
  it('createUser returns a user with id and role properties', () => {
    const createdUser = createUser();
    expect(createdUser).toHaveProperty('id', 'randomId');
    expect(createdUser).toHaveProperty('role', 'Default');
  });
});