export function getRole(user) {
  return user.rol || 'Default';
}

export function getRoleOldWay(user) {
  const { role } = user;
  const isValid = typeof role !== 'undefined' && role !== null;
  return isValid ? role : 'Default';
}

export function getRoleNCO(user) {
  return user.role ?? 'Default';
}