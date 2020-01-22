import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import { userSignIn } from "../reducers/user";

import {
	Header3,
	Paragraph,
	RouterLink,
	Group,
	Label,
	Input,
	ButtonAction
} from "./common";

const Wrapper = styled.div`
	height: 100vh;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #edf2f7;
`;
const Container = styled.div`
	width: 300px;
	padding: 20px;
	background: #ffffff;
	border-radius: 5px;
	border: 1px solid #e2e8f0;
`;
const Form = styled.form``;
const Prompt = styled.div``;

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
		<Wrapper>
			<Container>
				<Prompt>
					<Header3>Sign In</Header3>
					<Paragraph>
						Don't have an account?{" "}
						<RouterLink to="/sign-up">Sign up</RouterLink>
					</Paragraph>
				</Prompt>
				<Form onSubmit={handleSubmit}>
					<Group>
						<Label htmlFor="username">username</Label>
						<Input
							id="username"
							type="text"
							width="100%"
							value={username}
							onChange={event => setUsername(event.target.value)}
						></Input>
					</Group>
					<Group>
						<Label htmlFor="password">password</Label>
						<Input
							id="password"
							type="password"
							width="100%"
							value={password}
							onChange={event => setPassword(event.target.value)}
						></Input>
					</Group>
					<ButtonAction type="submit" width="100%">
						sign in
					</ButtonAction>
				</Form>
			</Container>
		</Wrapper>
	);
};

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { userSignIn })(SignIn);
