const INITIAL_STATE = '';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case "SELECT_CURRENT_TREE":
    console.log("SELECT_CURRENT_TREE:", action.payload);
    return action.payload;
  default:  
    return state;
  }
};
