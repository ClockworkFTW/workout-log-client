import { combineReducers } from "redux";

import userReducer from "./user";
import exerciseListReducer from "./exercise-list";
import exerciseEditorReducer from "./exercise-editor";
import exerciseFilterReducer from "./exercise-filter";
import workoutListReducer from "./workout-list";
import workoutEditorReducer from "./workout-editor";

const rootReducer = combineReducers({
	user: userReducer,
	exerciseList: exerciseListReducer,
	exerciseEditor: exerciseEditorReducer,
	exerciseFilter: exerciseFilterReducer,
	workoutList: workoutListReducer,
	workoutEditor: workoutEditorReducer
});

export default rootReducer;
