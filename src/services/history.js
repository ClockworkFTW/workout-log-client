import axios from "axios";

const baseUrl = "http://localhost:3005/history";

const create = async (token, session) => {
	const result = await axios.post(baseUrl, session, {
		headers: { Authorization: `Bearer ${token}` }
	});
	return result.data;
};

const read = async token => {
	const result = await axios.get(baseUrl, {
		headers: { Authorization: `Bearer ${token}` }
	});
	return result.data;
};

export default { create, read };
