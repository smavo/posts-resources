export function setRole(role, user) {
  return { ...user, role };
}

const role = 'Developer';

export const setRoleDeveloperOldWay = setRole.bind(null, role);

export const setRoleDeveloperPA = setRole(role, ? );

export function multiply3(a, b, c) {
  return a * b * c;
}

export const multiply2OldWay = multiply3.bind(null, 1);

export const multiply1OldWay = multiply2OldWay.bind(null, 2);

export const multiply2PA = multiply3(1, ?);

export const multiply1PA = multiply2PA(2, ?);

export const multiply2PAF = multiply3(1, ?, ?);

export const multiply1PAF = multiply2PAF(2, ?);

export const multiplyRTL = multiply3(?, ?, 3);

export const multiplyLTR = multiply3(1, ?, ?);

export const multiplyMiddle = multiply3(1, ?, 3);