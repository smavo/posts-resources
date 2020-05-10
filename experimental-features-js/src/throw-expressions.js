export function updateUser(user = throw new Error('user is required!')) {
  return true;
}

export function doOperation(isValidOperation) {
  isValidOperation || throw new Error('validation fail');
  return true;
}