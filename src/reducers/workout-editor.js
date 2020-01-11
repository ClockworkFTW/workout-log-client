const INIT_WORKOUT = "INIT_WORKOUT";
const ADD_EXERCISE = "ADD_EXERCISE";
const UPDATE_EXERCISE = "UPDATE_EXERCISE";
const REORDER_EXERCISE = "REORDER_EXERCISE";
const REMOVE_EXERCISE = "REMOVE_EXERCISE";
const CLEAR_WORKOUT = "CLEAR_WORKOUT";

export const initWorkout = () => {
	const workout = JSON.parse(localStorage.getItem("workoutLogWorkoutEditor"));
	return { type: INIT_WORKOUT, workout };
};

export const addExercise = exercise => ({ type: ADD_EXERCISE, exercise });

export const updateExercise = update => ({ type: UPDATE_EXERCISE, update });

export const reorderExercise = result => ({ type: REORDER_EXERCISE, result });

// TODO: change "remove" to "drop"
export const removeExercise = id => ({ type: REMOVE_EXERCISE, id });

export const clearWorkout = () => {
	localStorage.removeItem("workoutLogWorkoutEditor");
	return { type: CLEAR_WORKOUT };
};

const workoutEditorReducer = (state = [], action) => {
	let newState;
	switch (action.type) {
		case INIT_WORKOUT:
			return action.workout;
		case ADD_EXERCISE:
			newState = [...state, action.exercise];
			setWorkoutCache(newState);
			return newState;
		case UPDATE_EXERCISE:
			return state;
		case REORDER_EXERCISE:
			newState = handleReorder(state, action.result);
			setWorkoutCache(newState);
			return newState;
		case REMOVE_EXERCISE:
			newState = state.filter(exercise => exercise._id !== action.id);
			setWorkoutCache(newState);
			return newState;
		case CLEAR_WORKOUT:
			return [];
		default:
			return state;
	}
};

const handleReorder = (state, result) => {
	const { draggableId, source, destination } = result;
	const target = state.find(exercise => exercise._id === draggableId);
	state.splice(source.index, 1);
	state.splice(destination.index, 0, target);
	return state;
};

const setWorkoutCache = state =>
	localStorage.setItem("workoutLogWorkoutEditor", JSON.stringify(state));

export default workoutEditorReducer;
