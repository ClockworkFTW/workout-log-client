import workoutServices from "../services/workout";

const ADD_EXERCISE = "ADD_EXERCISE";
const REORDER_EXERCISE = "REORDER_EXERCISE";
const REMOVE_EXERCISE = "REMOVE_EXERCISE";

export const reorderExercise = () => {};

const workoutEditorReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_EXERCISE:
			return [...state, action.exercise];
		case REORDER_EXERCISE:
			return state;
		case REMOVE_EXERCISE:
			return state.filter(exercise => exercise.id !== action.id);
		default:
			return state;
	}
};

export default workoutEditorReducer;
