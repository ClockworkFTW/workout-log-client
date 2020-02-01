import moment from "moment";
import uniqid from "uniqid";

const WORKOUT_SESSION_START_WORKOUT = "WORKOUT_SESSION_START_WORKOUT";
const WORKOUT_SESSION_REORDER_EXERCISE = "WORKOUT_SESSION_REORDER_EXERCISE";
const WORKOUT_SESSION_MODIFY_WORKOUT = "WORKOUT_SESSION_MODIFY_WORKOUT";
const WORKOUT_SESSION_FINISH_WORKOUT = "WORKOUT_SESSION_FINISH_WORKOUT";

const WORKOUT_SESSION_START_REST_TIMER = "WORKOUT_SESSION_START_REST_TIMER";
const WORKOUT_SESSION_RESET_REST_TIMER = "WORKOUT_SESSION_RESET_REST_TIMER";

export const startWorkout = workout => ({
	type: WORKOUT_SESSION_START_WORKOUT,
	data: { workout, time: new Date() }
});

export const modifySet = (opr, prop, val, exrInd, setInd) => ({
	type: WORKOUT_SESSION_MODIFY_WORKOUT,
	edit: { opr, prop, val, exrInd, setInd }
});

export const reorderExercise = result => ({
	type: WORKOUT_SESSION_REORDER_EXERCISE,
	result
});

export const finishWorkout = () => ({
	type: WORKOUT_SESSION_FINISH_WORKOUT
});

export const startRestTimer = time => ({
	type: WORKOUT_SESSION_START_REST_TIMER,
	time
});

export const resetRestTimer = () => ({
	type: WORKOUT_SESSION_RESET_REST_TIMER
});

const INITIAL_STATE = {
	time: {
		sessionStart: null,
		restDuration: null,
		restEnd: null
	},
	workout: null
};

const workoutSessionReducer = (state = INITIAL_STATE, action) => {
	let newState;
	switch (action.type) {
		// Initialize session state
		case WORKOUT_SESSION_START_WORKOUT:
			newState = handleStartWorkout(state, action);
			return newState;
		// Reorder exercises
		case WORKOUT_SESSION_REORDER_EXERCISE:
			newState = handleReorderExercise(state, action);
			return newState;
		// Modify session state
		case WORKOUT_SESSION_MODIFY_WORKOUT:
			newState = handleModifySet(state, action);
			return newState;
		// Reset session state
		case WORKOUT_SESSION_FINISH_WORKOUT:
			newState = {
				time: { sessionStart: null, restDuration: null, restEnd: null },
				workout: null
			};
			return newState;
		// Initialize rest timer state
		case WORKOUT_SESSION_START_REST_TIMER:
			newState = {
				...state,
				time: {
					...state.time,
					restDuration: action.time * 1000,
					restEnd: moment.utc().add(action.time, "s")
				}
			};
			return newState;
		// Reset rest timer state
		case WORKOUT_SESSION_RESET_REST_TIMER:
			newState = {
				...state,
				time: { ...state.time, restDuration: null, restEnd: null }
			};
			return newState;
		default:
			return state;
	}
};

// CONSTRUCTORS

const newSet = {
	reps: 0,
	weight: 0,
	rest: 0,
	setType: "normal"
};

// HANDLERS

const handleStartWorkout = (state, action) => {
	const { time, workout } = action.data;

	// Assign unique ID's to each exercise for DND identification
	const uniqueExercises = workout.exercises.map(exercise => ({
		...exercise,
		exercise: { ...exercise.exercise, dragId: uniqid() }
	}));

	return {
		time: { ...state.time, sessionStart: time },
		workout: { ...workout, exercises: uniqueExercises }
	};
};

const handleReorderExercise = (state, action) => {
	// TODO: handle drop outside droppable
	const { exercises } = state.workout;
	const { draggableId, source, destination } = action.result;

	const target = exercises.find(
		({ exercise }) => exercise.dragId === draggableId
	);

	exercises.splice(source.index, 1);
	exercises.splice(destination.index, 0, target);

	return { ...state, workout: { ...state.workout, exercises } };
};

const handleModifySet = (state, action) => {
	const { opr, prop, val, exrInd, setInd } = action.edit;
	const { exercises } = state.workout;

	const updateSets = (set, index) => {
		if (index === setInd) {
			return { ...set, [prop]: val };
		} else {
			return set;
		}
	};

	const updateExercises = (exercise, index) => {
		if (index === exrInd) {
			let sets;
			switch (opr) {
				case "add":
					sets = [...exercise.sets, newSet];
					break;
				case "edit":
					sets = exercise.sets.map((set, index) =>
						updateSets(set, index)
					);
					break;
				case "drop":
					sets = exercise.sets.filter(
						(set, index) => index !== setInd
					);
					break;
				default:
					break;
			}
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
