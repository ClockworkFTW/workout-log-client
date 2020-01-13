import uniqid from "uniqid";

const WORKOUT_EDITOR_INIT = "WORKOUT_EDITOR_INIT";
const WORKOUT_EDITOR_ADD_EXERCISE = "WORKOUT_EDITOR_ADD_EXERCISE";
const WORKOUT_EDITOR_ADD_SET = "WORKOUT_EDITOR_ADD_SET";
const WORKOUT_EDITOR_MODIFY_SET = "WORKOUT_EDITOR_MODIFY_SET";
const WORKOUT_EDITOR_REMOVE_SET = "WORKOUT_EDITOR_REMOVE_SET";
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

// Exercise methods
export const addExercise = exercise => ({
	type: WORKOUT_EDITOR_ADD_EXERCISE,
	exercise
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

// Set methods
export const addSet = id => ({
	type: WORKOUT_EDITOR_ADD_SET,
	id
});

export const modifySet = (id, index, prop, val) => ({
	type: WORKOUT_EDITOR_MODIFY_SET,
	edit: { id, index, prop, val }
});

export const removeSet = (id, index) => ({
	type: WORKOUT_EDITOR_REMOVE_SET,
	edit: { id, index }
});

const newSet = {
	reps: 0,
	weight: 0,
	rest: 0,
	setType: "normal"
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
				sets: [newSet]
			};
			newState = [...state, exercise];
			setWorkoutCache(newState);
			return newState;

		// Add set to exercise
		case WORKOUT_EDITOR_ADD_SET:
			newState = state.map(exercise =>
				exercise.dragId === action.id
					? {
							...exercise,
							sets: [...exercise.sets, newSet]
					  }
					: exercise
			);
			setWorkoutCache(newState);
			return newState;

		// Modify a specific exercise's parameters
		// TODO: clean up
		case WORKOUT_EDITOR_MODIFY_SET:
			newState = state.map(exercise =>
				exercise.dragId === action.edit.id
					? {
							...exercise,
							sets: exercise.sets.map((set, index) =>
								index === action.edit.index
									? {
											...set,
											[action.edit.prop]: action.edit.val
									  }
									: set
							)
					  }
					: exercise
			);
			setWorkoutCache(newState);
			return newState;

		// Remove set from exercise
		case WORKOUT_EDITOR_REMOVE_SET:
			newState = state.map(exercise =>
				exercise.dragId === action.edit.id
					? {
							...exercise,
							sets: exercise.sets.filter(
								(set, index) => index !== action.edit.index
							)
					  }
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
	// TODO: handle drop outside droppable
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
