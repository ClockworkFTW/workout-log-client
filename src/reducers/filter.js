const SET_NAME_FILTER = "SET_NAME_FILTER";
const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";
const SET_BODYPART_FILTER = "SET_BODYPART_FILTER";

export const setNameFilter = name => ({ type: SET_NAME_FILTER, name });
export const setCategoryFilter = category => ({
	type: SET_CATEGORY_FILTER,
	category
});
export const setBodypartFilter = bodypart => ({
	type: SET_BODYPART_FILTER,
	bodypart
});

const INITIAL_STATE = {
	name: "",
	category: "all",
	bodypart: "all"
};

const filterReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_NAME_FILTER:
			return { ...state, name: action.name };
		case SET_CATEGORY_FILTER:
			return { ...state, category: action.category };
		case SET_BODYPART_FILTER:
			return { ...state, bodypart: action.bodypart };
		default:
			return state;
	}
};

export default filterReducer;
