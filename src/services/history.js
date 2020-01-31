import axios from "axios";

const baseUrl = "http://localhost:3005/history";

const create = async (token, session) => {
	const result = await axios.post(baseUrl, session, {
		headers: { Authorization: `Bearer ${token}` }
	});
	return result.data;
};

export default { create };
