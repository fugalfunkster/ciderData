import { combineReducers } from 'redux';
import TreeDataReducer from './reducer_tree_data';
import LegendReducer from './reducers_legend';
import CurrentTreeReducer from './reducer_current_tree';

const rootReducer = combineReducers({
  data: TreeDataReducer,
  currentTree: CurrentTreeReducer,
  legend: LegendReducer
});

export default rootReducer;
