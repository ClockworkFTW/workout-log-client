import moment from "moment";

const EDIT_MEASUREMENT = "EDIT_MEASUREMENT";
const ADD_MEASUREMENT = "ADD_MEASUREMENT";
const MODIFY_MEASUREMENT = "MODIFY_MEASUREMENT";
const DELETE_MEASUREMENT = "DELETE_MEASUREMENT";
const CLEAR_MEASUREMENT = "CLEAR_MEASUREMENT";

export const editMeasurement = measurement => ({
	type: EDIT_MEASUREMENT,
	measurement
});

export const addMeasurement = () => ({
	type: ADD_MEASUREMENT
});

export const modifyMeasurement = (i, x, y) => ({
	type: MODIFY_MEASUREMENT,
	edit: { i, x, y }
});

export const deleteMeasurement = x => ({
	type: DELETE_MEASUREMENT,
	x
});

export const clearMeasurement = () => ({
	type: CLEAR_MEASUREMENT
});

const measurementEditorReducer = (state = null, action) => {
	let newState;
	switch (action.type) {
		case EDIT_MEASUREMENT:
			return action.measurement;
		case ADD_MEASUREMENT:
			newState = handleAddMeasurement(state);
			return newState;
		case MODIFY_MEASUREMENT:
			newState = handleModifyMeasurement(state, action);
			return newState;
		case DELETE_MEASUREMENT:
			newState = handleDeleteMeasurement(state, action);
			return newState;
		case CLEAR_MEASUREMENT:
			return null;
		default:
			return state;
	}
};

const handleAddMeasurement = state => {
	// Initialize new data point today (x) using last known measurement (y)
	const x = moment().format("YYYY-MM-DD");
	const y = state.data[state.data.length - 1].y;

	return { ...state, data: [...state.data, { x, y }] };
};

const handleModifyMeasurement = (state, action) => {
	const { i, x, y } = action.edit;
	let data;

	// Modify date (x) and reorder data
	if (i || i === 0) {
		data = state.data.map((data, index) =>
			index === i ? { x, y: Number(y) } : data
		);
		data = data.sort((a, b) => new Date(a.x) - new Date(b.x));
	}
	// Modify measurement (y)
	else {
		data = state.data.map(data =>
			data.x === x ? { x, y: Number(y) } : data
		);
	}

	return { ...state, data };
};

const handleDeleteMeasurement = (state, action) => {
	const data = state.data.filter(data => data.x !== action.x);
	return { ...state, data };
};

export default measurementEditorReducer;
