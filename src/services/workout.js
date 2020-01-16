import axios from "axios";

const baseUrl = "http://localhost:3005/workout";

const create = async (token, workout) => {
	const result = await axios.post(baseUrl, workout, {
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

const update = async (token, workout) => {
	const result = await axios.put(`${baseUrl}/${workout._id}`, workout, {
		headers: { Authorization: `Bearer ${token}` }
	});
	return result.data;
};

const destroy = async (token, id) => {
	const result = await axios.delete(`${baseUrl}/${id}`, {
		headers: { Authorization: `Bearer ${token}` }
	});
	return result.data;
};

export default { create, read, update, destroy };
