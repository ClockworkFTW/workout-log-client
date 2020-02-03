import historyServices from "../services/history";

const WORKOUT_HISTORY_REQUEST_PENDING = "WORKOUT_HISTORY_REQUEST_PENDING";
const WORKOUT_HISTORY_REQUEST_SUCCESS = "WORKOUT_HISTORY_REQUEST_SUCCESS";
const WORKOUT_HISTORY_REQUEST_ERROR = "WORKOUT_HISTORY_REQUEST_ERROR";

const requestPending = () => ({
	type: WORKOUT_HISTORY_REQUEST_PENDING
});
const requestSuccess = (type, data) => ({
	type: WORKOUT_HISTORY_REQUEST_SUCCESS,
	response: { type, data }
});
const requestError = error => ({
	type: WORKOUT_HISTORY_REQUEST_ERROR,
	error
});

export const createHistory = (token, session) => {
	return async dispatch => {
		dispatch(requestPending());
		try {
			const newHistory = await historyServices.create(token, session);
			dispatch(requestSuccess("create", newHistory));
		} catch (error) {
			dispatch(requestError(error));
		}
	};
};

export const fetchHistory = token => {
	return async dispatch => {
		dispatch(requestPending());
		try {
			const history = await historyServices.read(token);
			dispatch(requestSuccess("read", history));
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

const workoutHistoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case WORKOUT_HISTORY_REQUEST_PENDING:
			return { ...state, pending: true };
		case WORKOUT_HISTORY_REQUEST_SUCCESS:
			return {
				...state,
				pending: false,
				data: handleModifyData(
					action.response.type,
					action.response.data,
					state.data
				)
			};
		case WORKOUT_HISTORY_REQUEST_ERROR:
			return { ...state, pending: false, error: action.error };
		default:
			return state;
	}
};

const handleModifyData = (type, newData, oldData) => {
	switch (type) {
		case "read":
			return newData;
		case "create":
			return [...oldData, newData];
		default:
			break;
	}
};

export default workoutHistoryReducer;
