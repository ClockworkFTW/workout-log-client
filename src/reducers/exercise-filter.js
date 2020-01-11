const SET_EXERCISE_FILTER = "SET_EXERCISE_FILTER";
const CLEAR_EXERCISE_FILTER = "CLEAR_EXERCISE_FILTER";

export const setExerciseFilter = (prop, val) => ({
	type: SET_EXERCISE_FILTER,
	filter: { prop, val }
});

export const clearExerciseFilter = () => ({ type: CLEAR_EXERCISE_FILTER });

const INITIAL_STATE = {
	name: "",
	muscle: "all",
	type: "all"
};

const exerciseFilterReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_EXERCISE_FILTER:
			return { ...state, [action.filter.prop]: action.filter.val };
		case CLEAR_EXERCISE_FILTER:
			return INITIAL_STATE;
		default:
			return state;
	}
};

export default exerciseFilterReducer;
