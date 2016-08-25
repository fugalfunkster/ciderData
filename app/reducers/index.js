import { combineReducers } from 'redux';
import TreeDataReducer from './reducer_tree_data';
import LegendReducer from './reducer_legend';
import CurrentTreeReducer from './reducer_current_tree';
import BlenderReducer from './reducer_blender';

const rootReducer = combineReducers({
  data: TreeDataReducer,
  currentTree: CurrentTreeReducer,
  legend: LegendReducer,
  blend: BlenderReducer
});

export default rootReducer;
