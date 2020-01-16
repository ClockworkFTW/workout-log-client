import workoutServices from "../services/workout";

const WORKOUT_LIST_REQUEST_PENDING = "WORKOUT_LIST_REQUEST_PENDING";
const WORKOUT_LIST_REQUEST_SUCCESS = "WORKOUT_LIST_REQUEST_SUCCESS";
const WORKOUT_LIST_REQUEST_ERROR = "WORKOUT_LIST_REQUEST_ERROR";

const requestPending = () => ({ type: WORKOUT_LIST_REQUEST_PENDING });
const requestSuccess = (type, data) => ({
	type: WORKOUT_LIST_REQUEST_SUCCESS,
	response: { type, data }
});
const requestError = error => ({ type: WORKOUT_LIST_REQUEST_ERROR, error });

export const fetchWorkouts = token => {
	return async dispatch => {
		dispatch(requestPending());
		try {
			const workouts = await workoutServices.read(token);
			dispatch(requestSuccess("fetch", workouts));
		} catch (error) {
			dispatch(requestError(error));
		}
	};
};

export const createWorkout = (token, workout) => {
	return async dispatch => {
		dispatch(requestPending());
		try {
			const newWorkout = await workoutServices.create(token, workout);
			dispatch(requestSuccess("create", newWorkout));
		} catch (error) {
			dispatch(requestError(error));
		}
	};
};

export const updateWorkout = (token, workout) => {
	return async dispatch => {
		dispatch(requestPending());
		try {
			const updatedWorkout = await workoutServices.update(token, workout);
			dispatch(requestSuccess("update", updatedWorkout));
		} catch (error) {
			dispatch(requestError(error));
		}
	};
};

export const deleteWorkout = (token, id) => {
	return async dispatch => {
		dispatch(requestPending());
		try {
			await workoutServices.destroy(token, id);
			dispatch(requestSuccess("delete", id));
		} catch (error) {
			dispatch(requestError(error));
		}
	};
};

const INITIAL_STATE = {
	pending: false,
	data: [],
	error: null
};

const workoutListReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case WORKOUT_LIST_REQUEST_PENDING:
			return { ...state, pending: true };
		case WORKOUT_LIST_REQUEST_SUCCESS:
			return {
				...state,
				pending: false,
				data: modifyData(
					action.response.type,
					action.response.data,
					state.data
				)
			};
		case WORKOUT_LIST_REQUEST_ERROR:
			return { ...state, pending: false, error: action.error };
		default:
			return state;
	}
};

const modifyData = (type, newData, oldData) => {
	switch (type) {
		case "fetch":
			return newData;
		case "create":
			return [...oldData, newData];
		case "update":
			return oldData.map(data =>
				data._id === newData._id ? newData : data
			);
		case "delete":
			return oldData.filter(data => data._id !== newData);
		default:
			break;
	}
};

export default workoutListReducer;
