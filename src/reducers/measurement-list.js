import measurementServices from "../services/measurement";

const MEASUREMENT_REQUEST_PENDING = "MEASUREMENT_REQUEST_PENDING";
const MEASUREMENT_REQUEST_SUCCESS = "MEASUREMENT_REQUEST_SUCCESS";
const MEASUREMENT_REQUEST_ERROR = "MEASUREMENT_REQUEST_ERROR";

const requestPending = () => ({ type: MEASUREMENT_REQUEST_PENDING });
const requestSuccess = data => ({ type: MEASUREMENT_REQUEST_SUCCESS, data });
const requestError = error => ({ type: MEASUREMENT_REQUEST_ERROR, error });

export const fetchMeasurements = token => {
	return async dispatch => {
		dispatch(requestPending());
		try {
			const measurements = await measurementServices.fetch(token);
			dispatch(requestSuccess(measurements));
		} catch (error) {
			dispatch(requestError(error));
		}
	};
};

export const updateMeasurements = (token, measurements) => {
	return async dispatch => {
		dispatch(requestPending());
		try {
			const updatedMeasurements = await measurementServices.update(
				token,
				measurements
			);
			dispatch(requestSuccess(updatedMeasurements));
		} catch (error) {
			dispatch(requestError(error));
		}
	};
};

const INITIAL_STATE = {
	pending: false,
	data: { sections: [] },
	error: null
};

const measurementReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MEASUREMENT_REQUEST_PENDING:
			return { ...state, pending: true };
		case MEASUREMENT_REQUEST_SUCCESS:
			return { ...state, pending: false, data: action.data };
		case MEASUREMENT_REQUEST_ERROR:
			return { ...state, pending: false, error: action.error };
		default:
			return state;
	}
};

export default measurementReducer;
