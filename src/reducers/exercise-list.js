import exerciseServices from "../services/exercise";

const EXERCISE_REQUEST_PENDING = "EXERCISE_REQUEST_PENDING";
const EXERCISE_REQUEST_SUCCESS = "EXERCISE_REQUEST_SUCCESS";
const EXERCISE_REQUEST_ERROR = "EXERCISE_REQUEST_ERROR";

const requestPending = () => ({ type: EXERCISE_REQUEST_PENDING });
const requestSuccess = (type, data) => ({
	type: EXERCISE_REQUEST_SUCCESS,
	response: { type, data }
});
const requestError = error => ({ type: EXERCISE_REQUEST_ERROR, error });

export const fetchExercises = token => {
	return async dispatch => {
		dispatch(requestPending());
		try {
			const exercises = await exerciseServices.read(token);
			dispatch(requestSuccess("fetch", exercises));
		} catch (error) {
			dispatch(requestError(error));
		}
	};
};

export const createExercise = (token, exercise) => {
	return async dispatch => {
		dispatch(requestPending());
		try {
			const newExercise = await exerciseServices.create(token, exercise);
			dispatch(requestSuccess("create", newExercise));
		} catch (error) {
			dispatch(requestError(error));
		}
	};
};

export const updateExercise = (token, exercise) => {
	return async dispatch => {
		dispatch(requestPending());
		try {
			const updatedExercise = await exerciseServices.update(
				token,
				exercise
			);
			dispatch(requestSuccess("update", updatedExercise));
		} catch (error) {
			dispatch(requestError(error));
		}
	};
};

export const deleteExercise = (token, id) => {
	return async dispatch => {
		dispatch(requestPending());
		try {
			await exerciseServices.destroy(token, id);
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

const exerciseListReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EXERCISE_REQUEST_PENDING:
			return { ...state, pending: true };
		case EXERCISE_REQUEST_SUCCESS:
			return {
				...state,
				pending: false,
				data: modifyData(
					action.response.type,
					action.response.data,
					state.data
				)
			};
		case EXERCISE_REQUEST_ERROR:
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

export default exerciseListReducer;
