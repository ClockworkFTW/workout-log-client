import axios from "axios";

const baseUrl = "http://localhost:3005/measurement";

const fetch = async token => {
	const result = await axios.get(baseUrl, {
		headers: { Authorization: `Bearer ${token}` }
	});
	return result.data;
};

const update = async (token, measurements) => {
	const result = await axios.put(baseUrl, measurements, {
		headers: { Authorization: `Bearer ${token}` }
	});
	return result.data;
};

export default { fetch, update };
