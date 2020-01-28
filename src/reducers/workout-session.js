const WORKOUT_SESSION_START_WORKOUT = "WORKOUT_SESSION_START_WORKOUT";
const WORKOUT_SESSION_MODIFY_WORKOUT = "WORKOUT_SESSION_MODIFY_WORKOUT";
const WORKOUT_SESSION_FINISH_WORKOUT = "WORKOUT_SESSION_FINISH_WORKOUT";

const WORKOUT_SESSION_TOGGLE_SET = "WORKOUT_SESSION_TOGGLE_SET";

export const startWorkout = workout => ({
	type: WORKOUT_SESSION_START_WORKOUT,
	data: { workout, time: new Date() }
});

export const modifyWorkout = edit => ({
	type: WORKOUT_SESSION_MODIFY_WORKOUT,
	edit
});

export const finishWorkout = () => ({
	type: WORKOUT_SESSION_FINISH_WORKOUT,
	time: new Date()
});

export const completeSet = (exerciseIndex, setIndex) => ({
	type: WORKOUT_SESSION_TOGGLE_SET,
	index: { exerciseIndex, setIndex }
});

const INITIAL_STATE = {
	startedAt: null,
	finishedAt: null,
	workout: null
};

const workoutSessionReducer = (state = INITIAL_STATE, action) => {
	let newState;
	switch (action.type) {
		case WORKOUT_SESSION_START_WORKOUT:
			newState = {
				...state,
				workout: action.data.workout,
				startedAt: action.data.time
			};
			return newState;
		case WORKOUT_SESSION_MODIFY_WORKOUT:
			return state;
		case WORKOUT_SESSION_FINISH_WORKOUT:
			newState = {
				...state,
				workout: null,
				finishedAt: action.time
			};
			return newState;
		case WORKOUT_SESSION_TOGGLE_SET:
			newState = handleToggleSet(state, action);
			return newState;
		default:
			return state;
	}
};

const handleToggleSet = (state, action) => {
	const { exercises } = state.workout;
	const { exerciseIndex, setIndex } = action.index;

	const updateSets = (set, index) => {
		if (index === setIndex) {
			const complete = set.complete;
			return { ...set, complete: !complete };
		} else {
			return set;
		}
	};

	const updateExercises = (exercise, index) => {
		if (index === exerciseIndex) {
			const sets = exercise.sets.map((set, index) =>
				updateSets(set, index)
			);
			return { ...exercise, sets };
		} else {
			return exercise;
		}
	};

	const updatedExercises = exercises.map((exercise, index) =>
		updateExercises(exercise, index)
	);

	return {
		...state,
		workout: { ...state.workout, exercises: updatedExercises }
	};
};

export default workoutSessionReducer;
