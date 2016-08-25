export function onAxisChange(request) {
  return {
    type: 'AXIS_CHANGE',
    payload: request
  };
}

export function selectCurrentTree(name) {
  return {
    type: 'SELECT_CURRENT_TREE',
    payload: name
  };
}

export function checkTree(tree) {
  return {
    type: 'CHECK_TREE',
    payload: tree
  };
}

export function checkAll() {
  return {
    type: 'CHECK_ALL',
    payload: null
  };
}

export function uncheckAll() {
  return {
    type: 'UNCHECK_ALL',
  };
}

export function onlyCheckSweets() {
  return {
    type: 'ONLY_CHECK_SWEETS',
  };
}

export function onlyCheckBittersweets() {
  return {
    type: 'ONLY_CHECK_BITTERSWEETS',
  };
}

export function onlyCheckBittersharps() {
  return {
    type: 'ONLY_CHECK_BITTERSHARPS',
  };
}

export function onlyCheckSharps() {
  return {
    type: 'ONLY_CHECK_SHARPS',
  };
}

export function blendVariety(variety) {
  return {
    type: 'BLEND',
    payload: variety
  };
}
