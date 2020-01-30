import moment from "moment";

const WORKOUT_SESSION_START_WORKOUT = "WORKOUT_SESSION_START_WORKOUT";
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

export const finishWorkout = () => ({
	type: WORKOUT_SESSION_FINISH_WORKOUT,
	time: new Date()
});

export const startRestTimer = time => ({
	type: WORKOUT_SESSION_START_REST_TIMER,
	time
});

export const resetRestTimer = () => ({
	type: WORKOUT_SESSION_RESET_REST_TIMER
});

const INITIAL_STATE = {
	startedAt: null,
	finishedAt: null,
	restDuration: null,
	restEndTime: null,
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
			newState = handleModifySet(state, action);
			return newState;
		case WORKOUT_SESSION_FINISH_WORKOUT:
			newState = {
				...state,
				workout: null,
				finishedAt: action.time
			};
			return newState;
		case WORKOUT_SESSION_START_REST_TIMER:
			newState = {
				...state,
				restDuration: action.time * 1000,
				restEndTime: moment.utc().add(action.time, "s")
			};
			return newState;
		case WORKOUT_SESSION_RESET_REST_TIMER:
			newState = { ...state, restDuration: null, restEndTime: null };
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
