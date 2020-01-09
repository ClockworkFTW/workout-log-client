import workoutServices from "../services/workout";

const INIT_WORKOUTS = "INIT_WORKOUTS";

const INITIAL_STATE = {
	pending: false,
	data: null,
	error: null
};

const workoutReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case INIT_WORKOUTS:
			return state;
		default:
			return state;
	}
};

export default workoutReducer;
