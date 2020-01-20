const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

export const toggleSidebar = () => ({ type: TOGGLE_SIDEBAR });

const sidebarReducer = (state = true, action) => {
	switch (action.type) {
		case TOGGLE_SIDEBAR:
			return !state;
		default:
			return state;
	}
};

export default sidebarReducer;
