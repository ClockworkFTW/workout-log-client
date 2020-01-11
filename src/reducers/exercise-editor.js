const INIT_EXERCISE = "INIT_EXERCISE";
const NEW_EXERCISE = "NEW_EXERCISE";
const EDIT_EXERCISE = "EDIT_EXERCISE";
const MODIFY_EXERCISE = "MODIFY_EXERCISE";
const CLEAR_EXERCISE = "CLEAR_EXERCISE";

// Pull current state from local storage and set to exercise editor state
export const initExercise = () => {
	const exercise = JSON.parse(
		localStorage.getItem("workoutLogExerciseEditor")
	);
	return { type: INIT_EXERCISE, exercise };
};

// Initialize the exercise editor state with a new exercise
export const newExercise = () => ({ type: NEW_EXERCISE });

// Initialize the exercise editor state with an existing exercise
export const editExercise = exercise => ({ type: EDIT_EXERCISE, exercise });

// Update exercise editor state on input change (controlled form inputs)
export const modifyExercise = (prop, val) => ({
	type: MODIFY_EXERCISE,
	edit: { prop, val }
});

// Clear local storage and exercise editor state
export const clearExercise = () => {
	localStorage.removeItem("workoutLogExerciseEditor");
	return { type: CLEAR_EXERCISE };
};

// Construct exercise object using existing exercise or default values
const constructExercise = exercise =>
	exercise
		? {
				...exercise,
				isNew: false
		  }
		: {
				name: "",
				difficulty: "beginner",
				type: "barbell",
				muscle: "chest",
				description: "",
				isNew: true
		  };

// Save exercise editor changes to local storage
const setExerciseCache = state =>
	localStorage.setItem("workoutLogExerciseEditor", JSON.stringify(state));

const exerciseEditorReducer = (state = null, action) => {
	let newState;
	switch (action.type) {
		case INIT_EXERCISE:
			return action.exercise;
		case NEW_EXERCISE:
			newState = constructExercise(null);
			setExerciseCache(newState);
			return newState;
		case EDIT_EXERCISE:
			newState = constructExercise(action.exercise);
			setExerciseCache(newState);
			return newState;
		case MODIFY_EXERCISE:
			newState = { ...state, [action.edit.prop]: action.edit.val };
			setExerciseCache(newState);
			return newState;
		case CLEAR_EXERCISE:
			return null;
		default:
			return state;
	}
};

export default exerciseEditorReducer;
