import { combineReducers } from "redux";

import userReducer from "./user";
import exerciseReducer from "./exercise";
import filterReducer from "./filter";
import workoutReducer from "./workout";

const rootReducer = combineReducers({
	user: userReducer,
	exercises: exerciseReducer,
	filter: filterReducer,
	workouts: workoutReducer
});

export default rootReducer;
