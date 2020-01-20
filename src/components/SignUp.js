import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import { userSignUp } from "../reducers/user";
import {
	Group,
	Label,
	Input,
	ButtonAction,
	Header3,
	Paragraph,
	RouterLink
} from "./common";

const Wrapper = styled.div`
	height: calc(100vh - 45px);
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
const Prompt = styled.div``;
const Form = styled.form``;

const SignUp = ({ user, userSignUp }) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [passwordOne, setPasswordOne] = useState("");
	const [passwordTwo, setPasswordTwo] = useState("");

	const handleSubmit = event => {
		event.preventDefault();
		userSignUp({ username, email, passwordOne, passwordTwo });
	};

	return user ? (
		<Redirect to="/dashboard" />
	) : (
		<Wrapper>
			<Container>
				<Prompt>
					<Header3>Sign Up</Header3>
					<Paragraph>
						Already have an account?{" "}
						<RouterLink to="/sign-in">Sign in</RouterLink>
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
						/>
					</Group>
					<Group>
						<Label htmlFor="email">email</Label>
						<Input
							id="email"
							type="email"
							width="100%"
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
					</Group>
					<Group>
						<Label htmlFor="password-one">password</Label>
						<Input
							id="password-one"
							type="password"
							width="100%"
							value={passwordOne}
							onChange={event =>
								setPasswordOne(event.target.value)
							}
						/>
					</Group>
					<Group>
						<Label htmlFor="password-two">confirm password</Label>
						<Input
							id="password-two"
							type="password"
							width="100%"
							value={passwordTwo}
							onChange={event =>
								setPasswordTwo(event.target.value)
							}
						/>
					</Group>
					<ButtonAction type="submit" width="100%">
						sign up
					</ButtonAction>
				</Form>
			</Container>
		</Wrapper>
	);
};

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { userSignUp })(SignUp);
