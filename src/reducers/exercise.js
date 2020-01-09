import exerciseServices from "../services/exercise";

const EXERCISE_REQUEST_PENDING = "EXERCISE_REQUEST_PENDING";
const EXERCISE_REQUEST_SUCCESS = "EXERCISE_REQUEST_SUCCESS";
const EXERCISE_REQUEST_ERROR = "EXERCISE_REQUEST_ERROR";

const EXERCISE_SET_ACTIVE = "EXERCISE_SET_ACTIVE";
const EXERCISE_SET_EDITING = "EXERCISE_SET_EDITING";

const exerciseRequestPending = () => ({ type: EXERCISE_REQUEST_PENDING });
const exerciseRequestSuccess = (data, method) => ({
	type: EXERCISE_REQUEST_SUCCESS,
	data,
	method
});
const exerciseRequestError = error => ({ type: EXERCISE_REQUEST_ERROR, error });

export const readExercise = token => {
	return async dispatch => {
		dispatch(exerciseRequestPending());
		try {
			const exercises = await exerciseServices.read(token);
			dispatch(exerciseRequestSuccess(exercises, "read"));
		} catch (error) {
			dispatch(exerciseRequestError(error));
		}
	};
};

export const createExercise = (token, exercise) => {
	return async dispatch => {
		dispatch(exerciseRequestPending());
		try {
			const newExercise = await exerciseServices.create(token, exercise);
			dispatch(exerciseRequestSuccess(newExercise, "create"));
		} catch (error) {
			dispatch(exerciseRequestError(error));
		}
	};
};

export const updateExercise = (token, id, exercise) => {
	return async dispatch => {
		dispatch(exerciseRequestPending());
		try {
			const updatedExercise = await exerciseServices.update(
				token,
				id,
				exercise
			);
			dispatch(exerciseRequestSuccess(updatedExercise, "update"));
		} catch (error) {
			dispatch(exerciseRequestError(error));
		}
	};
};

export const destroyExercise = (token, id) => {
	return async dispatch => {
		dispatch(exerciseRequestPending());
		try {
			await exerciseServices.destroy(token, id);
			dispatch(exerciseRequestSuccess(id, "destroy"));
		} catch (error) {
			dispatch(exerciseRequestError(error));
		}
	};
};

export const setActive = exercise => ({ type: EXERCISE_SET_ACTIVE, exercise });
export const setEditing = exercise => ({
	type: EXERCISE_SET_EDITING,
	exercise
});

const INITIAL_STATE = {
	pending: false,
	data: [],
	active: null,
	editing: null,
	error: null
};

const exerciseReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EXERCISE_REQUEST_PENDING:
			return { ...state, pending: true };
		case EXERCISE_REQUEST_SUCCESS:
			return {
				...state,
				pending: false,
				data: setData(state.data, action.data, action.method),
				editing: null
			};
		case EXERCISE_REQUEST_ERROR:
			return { ...state, pending: false, error: action.error };
		case EXERCISE_SET_ACTIVE:
			return { ...state, active: action.exercise, editing: null };
		case EXERCISE_SET_EDITING:
			return { ...state, active: null, editing: action.exercise };
		default:
			return state;
	}
};

const setData = (state, data, method) => {
	switch (method) {
		case "read":
			return data;
		case "create":
			return [...state, data];
		case "update":
			return [...state, data];
		case "destroy":
			return state.filter(exercise => (exercise._id = data.id));
		default:
			return [];
	}
};

export default exerciseReducer;
