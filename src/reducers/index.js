import { combineReducers } from "redux";

import sidebarReducer from "./sidebar";
import userReducer from "./user";
import exerciseListReducer from "./exercise-list";
import exerciseEditorReducer from "./exercise-editor";
import exerciseFilterReducer from "./exercise-filter";
import workoutListReducer from "./workout-list";
import workoutEditorReducer from "./workout-editor";
import workoutSessionReducer from "./workout-session";
import workoutHistoryReducer from "./workout-history";
import measurementListReducer from "./measurement-list";
import measurementEditorReducer from "./measurement-editor";

const rootReducer = combineReducers({
	sidebar: sidebarReducer,
	user: userReducer,
	exerciseList: exerciseListReducer,
	exerciseEditor: exerciseEditorReducer,
	exerciseFilter: exerciseFilterReducer,
	workoutList: workoutListReducer,
	workoutEditor: workoutEditorReducer,
	workoutSession: workoutSessionReducer,
	workoutHistory: workoutHistoryReducer,
	measurementList: measurementListReducer,
	measurementEditor: measurementEditorReducer
});

export default rootReducer;
