import jwt from "jsonwebtoken";

import userServices from "../services/user";

const USER_REQUEST_PENDING = "USER_REQUEST_PENDING";
const USER_REQUEST_SUCCESS = "USER_REQUEST_SUCCESS";
const USER_REQUEST_ERROR = "USER_REQUEST_ERROR";

const userRequestPending = () => ({ type: USER_REQUEST_PENDING });
const userRequestSuccess = data => ({ type: USER_REQUEST_SUCCESS, data });
const userRequestError = error => ({ type: USER_REQUEST_ERROR, error });

export const userInit = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	if (user) {
		return { type: USER_REQUEST_SUCCESS, data: user };
	}
	return { type: USER_REQUEST_SUCCESS, data: null };
};

export const userSignUp = credentials => {
	return async dispatch => {
		dispatch(userRequestPending());
		try {
			const token = await userServices.signUp(credentials);
			const decoded = jwt.decode(token);
			const user = { ...token, ...decoded };
			localStorage.setItem("user", JSON.stringify(user));
			dispatch(userRequestSuccess(user));
		} catch (error) {
			dispatch(userRequestError(error));
		}
	};
};

export const userSignIn = credentials => {
	return async dispatch => {
		dispatch(userRequestPending());
		try {
			const token = await userServices.signIn(credentials);
			const decoded = jwt.decode(token);
			const user = { ...token, ...decoded };
			localStorage.setItem("user", JSON.stringify(user));
			dispatch(userRequestSuccess(user));
		} catch (error) {
			dispatch(userRequestError(error));
		}
	};
};

export const userSignOut = () => {
	localStorage.removeItem("user");
	return { type: USER_REQUEST_SUCCESS, data: null };
};

const INITIAL_STATE = {
	pending: false,
	data: null,
	error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_REQUEST_PENDING:
			return { ...state, pending: true };
		case USER_REQUEST_SUCCESS:
			return { ...state, pending: false, data: action.data };
		case USER_REQUEST_ERROR:
			return { ...state, pending: false, error: action.error };
		default:
			return state;
	}
};

export default userReducer;
