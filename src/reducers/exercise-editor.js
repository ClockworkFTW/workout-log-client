const INIT_EXERCISE = "INIT_EXERCISE";
const CREATE_EXERCISE = "CREATE_EXERCISE";
const EDIT_EXERCISE = "EDIT_EXERCISE";
const CLEAR_EXERCISE = "CLEAR_EXERCISE";

export const initWorkout = () => {
	const exercise = JSON.parse(
		localStorage.getItem("workoutLogExerciseEditor")
	);
	return { type: INIT_EXERCISE, exercise };
};

export const createExercise = () => ({ type: CREATE_EXERCISE });

export const editExercise = exercise => ({ type: EDIT_EXERCISE, exercise });

export const clearWorkout = () => {
	localStorage.removeItem("workoutLogExerciseEditor");
	return { type: CLEAR_EXERCISE };
};

const constructExercise = exercise => ({
	name: exercise ? exercise.name : "",
	difficulty: exercise ? exercise.difficulty : "beginner",
	equipment: exercise ? exercise.equipment : "barbell",
	muscle: exercise ? exercise.muscle : "chest",
	description: exercise ? exercise.description : ""
});

const exerciseEditorReducer = (state = null, action) => {
	switch (action.type) {
		case INIT_EXERCISE:
			return action.exercise;
		case CREATE_EXERCISE:
			return constructExercise(null);
		case EDIT_EXERCISE:
			return constructExercise(action.exercise);
		case CLEAR_EXERCISE:
			return null;
		default:
			return state;
	}
};

const setExerciseCache = state =>
	localStorage.setItem("workoutLogExerciseEditor", JSON.stringify(state));

export default exerciseEditorReducer;
