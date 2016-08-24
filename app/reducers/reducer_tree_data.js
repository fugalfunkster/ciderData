import ciderData from '../data/cider.js';
const INITIAL_STATE = ciderData;

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case 'CHECK_TREE':
    const tree = state.filter(function(t, i) {
      if (t.Cultivar === action.payload.target.id) {
        return true;
      }
      return false;
    });
    const index = state.indexOf(tree[0]);
    return [...state.slice(0, index),
            {...state[index], checked: !state[index].checked},
           ...state.slice(index + 1)];
  case 'CHECK_ALL':
    return state.map(t => ({...t, checked: true}));
  case 'UNCHECK_ALL':
    return state.map(t => ({...t, checked: false}));
  case 'ONLY_CHECK_SWEETS':
    return state.map(t => ({...t,
                            checked:
                              (t["Malic Acid g/I (Mean)"] < 4.5 &&
                               t["Tannin % (Mean)"] < .2 )
                               ? true
                               : false}));
  case 'ONLY_CHECK_BITTERSWEETS':
    return state.map(t => ({...t,
                            checked:
                              (t["Malic Acid g/I (Mean)"] < 4.5 &&
                               t["Tannin % (Mean)"] >= .2 )
                               ? true
                               : false}));
  case 'ONLY_CHECK_BITTERSHARPS':
    return state.map(t => ({...t,
                            checked:
                              (t["Malic Acid g/I (Mean)"] >= 4.5 &&
                               t["Tannin % (Mean)"] >= .2 )
                               ? true
                               : false}));
  case 'ONLY_CHECK_SHARPS':
    return state.map(t => ({...t,
                            checked:
                              (t["Malic Acid g/I (Mean)"] >= 4.5 &&
                               t["Tannin % (Mean)"] < .2 )
                               ? true
                               : false}));
  default:  
    return state;
  }
};
