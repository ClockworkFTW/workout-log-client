import axios from "axios";

const baseUrl = "http://localhost:3005/user";

const signIn = async credentials => {
	const result = await axios.post(`${baseUrl}/signin`, credentials);
	return result.data;
};

const signUp = async credentials => {
	const result = await axios.post(`${baseUrl}/signup`, credentials);
	return result.data;
};

export default { signIn, signUp };
