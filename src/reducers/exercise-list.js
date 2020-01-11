import exerciseServices from "../services/exercise";

const EXERCISE_REQUEST_PENDING = "EXERCISE_REQUEST_PENDING";
const EXERCISE_REQUEST_SUCCESS = "EXERCISE_REQUEST_SUCCESS";
const EXERCISE_REQUEST_ERROR = "EXERCISE_REQUEST_ERROR";

const requestPending = () => ({ type: EXERCISE_REQUEST_PENDING });
const requestSuccess = data => ({ type: EXERCISE_REQUEST_SUCCESS, data });
const requestError = error => ({ type: EXERCISE_REQUEST_ERROR, error });

export const fetchExercises = token => {
	return async dispatch => {
		dispatch(requestPending());
		try {
			const exercises = await exerciseServices.read(token);
			dispatch(requestSuccess(exercises));
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
			return { ...state, pending: false, data: action.data };
		case EXERCISE_REQUEST_ERROR:
			return { ...state, pending: false, error: action.error };
		default:
			return state;
	}
};

export default exerciseListReducer;
