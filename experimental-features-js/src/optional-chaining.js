export function getAccountId(user) {
  return user.account.id;
}

export function getAccountIdOldWay(user) {
  return user && user.account && user.account.id;
}

export function getAccountIdChaining(user) {
  return user?.account?.id;
}
