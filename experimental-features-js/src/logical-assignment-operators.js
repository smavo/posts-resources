export function buildUser(user) {
  const newUser = { ...user };
  newUser.role ||= 'Default';
  return newUser;
}

export function replaceCode(user) {
  const userToWork = { ...user };
  userToWork.code &&= 777;
  return userToWork;
}

export function addRole(user) {
  const userToWork = { ...user };
  userToWork.role ??= 'Default';
  return userToWork;
}