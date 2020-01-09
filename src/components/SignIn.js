import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

import { userSignIn } from "../reducers/user";

import InputGroup from "./common/InputGroup";

const Container = styled.div``;
const Form = styled.form``;
const Button = styled.button``;
const Prompt = styled.p``;

const SignIn = ({ user, userSignIn }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = event => {
		event.preventDefault();
		userSignIn({ username, password });
	};

	return user ? (
		<Redirect to="/dashboard" />
	) : (
		<Container>
			<Form onSubmit={handleSubmit}>
				<InputGroup
					id="username"
					label="username"
					type="text"
					value={username}
					setValue={setUsername}
				/>
				<InputGroup
					id="password"
					label="password"
					type="password"
					value={password}
					setValue={setPassword}
				/>
				<Button type="submit">sign in</Button>
			</Form>
			<Prompt>
				Don't have an account? <Link to="/sign-up">Sign up</Link>
			</Prompt>
		</Container>
	);
};

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { userSignIn })(SignIn);
