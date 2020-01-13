import uniqid from "uniqid";

const WORKOUT_EDITOR_INIT = "WORKOUT_EDITOR_INIT";
const WORKOUT_EDITOR_ADD_EXERCISE = "WORKOUT_EDITOR_ADD_EXERCISE";
const WORKOUT_EDITOR_MODIFY_EXERCISE = "WORKOUT_EDITOR_MODIFY_EXERCISE";
const WORKOUT_EDITOR_REORDER_EXERCISE = "WORKOUT_EDITOR_REORDER_EXERCISE";
const WORKOUT_EDITOR_REMOVE_EXERCISE = "WORKOUT_EDITOR_REMOVE_EXERCISE";
const WORKOUT_EDITOR_CLEAR_WORKOUT = "WORKOUT_EDITOR_CLEAR_WORKOUT";

// Retrieve the workout editor state from local storage
export const initWorkout = () => {
	const workout = JSON.parse(localStorage.getItem("workoutLogWorkoutEditor"));
	return workout
		? { type: WORKOUT_EDITOR_INIT, workout }
		: { type: WORKOUT_EDITOR_INIT, workout: [] };
};

export const addExercise = exercise => ({
	type: WORKOUT_EDITOR_ADD_EXERCISE,
	exercise
});

export const modifyExercise = (id, prop, val) => ({
	type: WORKOUT_EDITOR_MODIFY_EXERCISE,
	edit: { id, prop, val }
});

export const reorderExercise = result => ({
	type: WORKOUT_EDITOR_REORDER_EXERCISE,
	result
});

export const removeExercise = id => ({
	type: WORKOUT_EDITOR_REMOVE_EXERCISE,
	id
});

// Clear workout editor state from local storage
export const clearWorkout = () => {
	localStorage.removeItem("workoutLogWorkoutEditor");
	return { type: WORKOUT_EDITOR_CLEAR_WORKOUT };
};

const workoutEditorReducer = (state = [], action) => {
	let newState;
	switch (action.type) {
		// Set cached workout editor state
		case WORKOUT_EDITOR_INIT:
			return action.workout;

		// Add an exercise with a unique drag ID to the editor
		case WORKOUT_EDITOR_ADD_EXERCISE:
			const exercise = {
				dragId: uniqid(),
				...action.exercise,
				sets: 0,
				reps: 0,
				rest: 0,
				setType: "normal"
			};
			newState = [...state, exercise];
			setWorkoutCache(newState);
			return newState;

		// Modify a specific exercise's parameters
		case WORKOUT_EDITOR_MODIFY_EXERCISE:
			newState = state.map(exercise =>
				exercise.dragId === action.edit.id
					? { ...exercise, [action.edit.prop]: action.edit.val }
					: exercise
			);
			setWorkoutCache(newState);
			return newState;

		// Update the editor's exercise order after a drag event
		case WORKOUT_EDITOR_REORDER_EXERCISE:
			newState = handleReorder(state, action.result);
			setWorkoutCache(newState);
			return newState;

		// Remove an exercise from the editor
		case WORKOUT_EDITOR_REMOVE_EXERCISE:
			newState = state.filter(exercise => exercise.dragId !== action.id);
			setWorkoutCache(newState);
			return newState;

		// Reset workout editor state
		case WORKOUT_EDITOR_CLEAR_WORKOUT:
			return [];

		default:
			return state;
	}
};

// Handle workout editor exercise reordering
const handleReorder = (state, result) => {
	const { draggableId, source, destination } = result;
	const target = state.find(exercise => exercise.dragId === draggableId);
	state.splice(source.index, 1);
	state.splice(destination.index, 0, target);
	return state;
};

// Save the workout editor state to local storage
const setWorkoutCache = state =>
	localStorage.setItem("workoutLogWorkoutEditor", JSON.stringify(state));

export default workoutEditorReducer;
