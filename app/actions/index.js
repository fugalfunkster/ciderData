export function onAxisChange(request) {
  return {
    type: "AXIS_CHANGE",
    payload: request
  };
}

export function selectCurrentTree(name) {
  return {
    type: "SELECT_CURRENT_TREE",
    payload: name
  };
}
