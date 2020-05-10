
function setRole(role, user) {
  return { ...user, role };
}

function addId(user) {
  return { ...user, id: 'randomId' };
}

export function createUser() {
  const user = {};
  return user
  |> addId
  |> setRole('Default', ?);
}