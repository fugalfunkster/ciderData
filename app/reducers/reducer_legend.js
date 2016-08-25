const INITIAL_STATE = {
  xAxisLabel: "Tannin % (Mean)",
  yAxisLabel: "Malic Acid g/I (Mean)",
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case "AXIS_CHANGE":
    if (action.payload.target.name === "Y") {
      return {...state, yAxisLabel: action.payload.target.value };
    } else {
      return {...state, xAxisLabel: action.payload.target.value };
    }
    return state;
  default:  
    return state;
  }
};
