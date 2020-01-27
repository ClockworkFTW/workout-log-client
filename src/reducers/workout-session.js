const WORKOUT_SESSION_START_WORKOUT = "WORKOUT_SESSION_START_WORKOUT";
const WORKOUT_SESSION_MODIFY_WORKOUT = "WORKOUT_SESSION_MODIFY_WORKOUT";
const WORKOUT_SESSION_FINISH_WORKOUT = "WORKOUT_SESSION_FINISH_WORKOUT";

export const startWorkout = workout => ({
	type: WORKOUT_SESSION_START_WORKOUT,
	workout
});

export const modifyWorkout = edit => ({
	type: WORKOUT_SESSION_MODIFY_WORKOUT,
	edit
});

export const finishWorkout = () => ({
	type: WORKOUT_SESSION_FINISH_WORKOUT
});

const workoutSessionReducer = (state = null, action) => {
	switch (action.type) {
		case WORKOUT_SESSION_START_WORKOUT:
			return action.workout;
		case WORKOUT_SESSION_FINISH_WORKOUT:
			return null;
		default:
			return state;
	}
};

export default workoutSessionReducer;
