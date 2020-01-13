import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

import { userSignIn } from "../reducers/user";

import { Group, Label, Input, Button } from "./common";

const Wrapper = styled.div`
	height: calc(100vh - 45px);
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Container = styled.div``;
const Form = styled.form``;
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
		<Wrapper>
			<Container>
				<Form onSubmit={handleSubmit}>
					<Group>
						<Label htmlFor="username">username</Label>
						<Input
							id="username"
							type="text"
							value={username}
							onChange={event => setUsername(event.target.value)}
						></Input>
					</Group>
					<Group>
						<Label htmlFor="password">password</Label>
						<Input
							id="password"
							type="password"
							value={password}
							onChange={event => setPassword(event.target.value)}
						></Input>
					</Group>
					<Button type="submit">sign in</Button>
				</Form>
				<Prompt>
					Don't have an account? <Link to="/sign-up">Sign up</Link>
				</Prompt>
			</Container>
		</Wrapper>
	);
};

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { userSignIn })(SignIn);
