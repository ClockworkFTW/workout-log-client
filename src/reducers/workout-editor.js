import uniqid from "uniqid";

// ACTIONS
const WORKOUT_EDITOR_INIT_WORKOUT = "WORKOUT_EDITOR_INIT_WORKOUT";
const WORKOUT_EDITOR_NEW_WORKOUT = "WORKOUT_EDITOR_NEW_WORKOUT";
const WORKOUT_EDITOR_EDIT_WORKOUT = "WORKOUT_EDITOR_EDIT_WORKOUT";
const WORKOUT_EDITOR_MODIFY_WORKOUT = "WORKOUT_EDITOR_MODIFY_WORKOUT";
const WORKOUT_EDITOR_ADD_EXERCISE = "WORKOUT_EDITOR_ADD_EXERCISE";
const WORKOUT_EDITOR_REORDER_EXERCISE = "WORKOUT_EDITOR_REORDER_EXERCISE";
const WORKOUT_EDITOR_REMOVE_EXERCISE = "WORKOUT_EDITOR_REMOVE_EXERCISE";
const WORKOUT_EDITOR_ADD_SET = "WORKOUT_EDITOR_ADD_SET";
const WORKOUT_EDITOR_MODIFY_SET = "WORKOUT_EDITOR_MODIFY_SET";
const WORKOUT_EDITOR_REMOVE_SET = "WORKOUT_EDITOR_REMOVE_SET";
const WORKOUT_EDITOR_CLEAR_WORKOUT = "WORKOUT_EDITOR_CLEAR_WORKOUT";

// ACTION CREATORS: Workout
export const initWorkout = () => {
	const workout = JSON.parse(localStorage.getItem("workoutLogWorkoutEditor"));
	return { type: WORKOUT_EDITOR_INIT_WORKOUT, workout };
};

export const newWorkout = () => ({ type: WORKOUT_EDITOR_NEW_WORKOUT });

export const editWorkout = workout => ({
	type: WORKOUT_EDITOR_EDIT_WORKOUT,
	workout
});

export const modifyWorkout = (prop, val) => ({
	type: WORKOUT_EDITOR_MODIFY_WORKOUT,
	edit: { prop, val }
});

export const clearWorkout = () => {
	localStorage.removeItem("workoutLogWorkoutEditor");
	return { type: WORKOUT_EDITOR_CLEAR_WORKOUT };
};

// ACTION CREATORS: Exercise
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

// ACTION CREATORS: Set
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

// CONSTRUCTORS
const newSet = {
	reps: 0,
	weight: 0,
	rest: 0,
	setType: "normal"
};

const constructWorkout = workout =>
	workout
		? {
				...workout,
				exercises: workout.exercises.map(exercise => ({
					dragId: uniqid(),
					...exercise
				})),
				isNew: false
		  }
		: { name: "", description: "", exercises: [], isNew: true };

// REDUCER
const workoutEditorReducer = (state = null, action) => {
	let newState;
	switch (action.type) {
		// Set workout editor state to cache
		case WORKOUT_EDITOR_INIT_WORKOUT:
			return action.workout;

		// Create a new workout
		case WORKOUT_EDITOR_NEW_WORKOUT:
			newState = constructWorkout();
			setWorkoutCache(newState);
			return newState;

		// Edit an existing workout
		case WORKOUT_EDITOR_EDIT_WORKOUT:
			newState = constructWorkout(action.workout);
			setWorkoutCache(newState);
			return newState;

		// Modify workout properties
		case WORKOUT_EDITOR_MODIFY_WORKOUT:
			newState = newState = {
				...state,
				[action.edit.prop]: action.edit.val
			};
			setWorkoutCache(newState);
			return newState;

		// Add an exercise with a unique drag ID to the editor
		case WORKOUT_EDITOR_ADD_EXERCISE:
			const exercise = {
				dragId: uniqid(),
				exercise: action.exercise,
				sets: [newSet]
			};
			newState = { ...state, exercises: [...state.exercises, exercise] };
			setWorkoutCache(newState);
			return newState;

		// Update the editor's exercise order after a drag event
		case WORKOUT_EDITOR_REORDER_EXERCISE:
			newState = {
				...state,
				exercises: handleReorder(state.exercises, action.result)
			};
			setWorkoutCache(newState);
			return newState;

		// Remove an exercise from the editor
		case WORKOUT_EDITOR_REMOVE_EXERCISE:
			newState = {
				...state,
				exercises: handleRemove(state.exercises, action.id)
			};
			setWorkoutCache(newState);
			return newState;

		// Add a set to an exercise
		case WORKOUT_EDITOR_ADD_SET:
			newState = {
				...state,
				exercises: handleAddSet(state.exercises, action.id)
			};
			setWorkoutCache(newState);
			return newState;

		// Remove a set from an exercise
		case WORKOUT_EDITOR_MODIFY_SET:
			newState = {
				...state,
				exercises: handleModifySet(
					state.exercises,
					action.edit.id,
					action.edit.index,
					action.edit.prop,
					action.edit.val
				)
			};
			setWorkoutCache(newState);
			return newState;

		// Modify a set on an exercise
		case WORKOUT_EDITOR_REMOVE_SET:
			newState = {
				...state,
				exercises: handleRemoveSet(
					state.exercises,
					action.edit.id,
					action.edit.index
				)
			};
			setWorkoutCache(newState);
			return newState;

		// Reset the workout editor state
		case WORKOUT_EDITOR_CLEAR_WORKOUT:
			return null;

		default:
			return state;
	}
};

// HANDLERS
const handleReorder = (exercises, result) => {
	// TODO: handle drop outside droppable
	const { draggableId, source, destination } = result;
	const target = exercises.find(exercise => exercise.dragId === draggableId);
	exercises.splice(source.index, 1);
	exercises.splice(destination.index, 0, target);
	return exercises;
};

const handleRemove = (exercises, id) =>
	exercises.filter(exercise => exercise.dragId !== id);

const handleAddSet = (exercises, id) =>
	exercises.map(exercise =>
		exercise.dragId === id
			? {
					...exercise,
					sets: [...exercise.sets, newSet]
			  }
			: exercise
	);

const handleModifySet = (exercises, id, index, prop, val) =>
	exercises.map(exercise =>
		exercise.dragId === id
			? {
					...exercise,
					sets: exercise.sets.map((set, i) =>
						i === index
							? {
									...set,
									[prop]: val
							  }
							: set
					)
			  }
			: exercise
	);

const handleRemoveSet = (exercises, id, index) =>
	exercises.map(exercise =>
		exercise.dragId === id
			? {
					...exercise,
					sets: exercise.sets.filter((set, i) => i !== index)
			  }
			: exercise
	);

// Save the workout editor state to local storage
const setWorkoutCache = state =>
	localStorage.setItem("workoutLogWorkoutEditor", JSON.stringify(state));

export default workoutEditorReducer;
