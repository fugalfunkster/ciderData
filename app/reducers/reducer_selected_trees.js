const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case 'SELECT_TREE':
    if (state.indexOf(action.payload.target.id) === -1) {
      return [...state, action.payload.target.id];      
    }
    if (state.indexOf(action.payload.target.id) !== -1) {
      return [...state.slice(0, state.indexOf(action.payload.target.id)),
              ...state.slice(state.indexOf(action.payload.target.id) + 1)];      
    }
    return state;
  default:  
    return state;
  }
};
