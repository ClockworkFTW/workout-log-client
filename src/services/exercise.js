import axios from "axios";

const baseUrl = "http://localhost:3005/exercise";

const create = async (token, exercise) => {
	const result = await axios.post(baseUrl, exercise, {
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

const update = async (token, id, exercise) => {
	const result = await axios.put(`${baseUrl}/${id}`, exercise, {
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
