import { combineReducers } from 'redux';
import ciderData from '../data/cider.js';
import LegendReducer from './reducers_legend';
import CurrentTreeReducer from './reducer_current_tree';

const rootReducer = combineReducers({
  data: (state = ciderData) => state,
  selectedTrees: (state = {}) => state,
  currentTree: CurrentTreeReducer,
  legend: LegendReducer
});

export default rootReducer;
