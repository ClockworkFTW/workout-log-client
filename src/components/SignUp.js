import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

import { userSignUp } from "../reducers/user";
import { Group, Label, Input, Button } from "./common";

const Container = styled.div``;
const Form = styled.form``;
const Prompt = styled.p``;

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
		<Container>
			<Form onSubmit={handleSubmit}>
				<Group>
					<Label htmlFor="username">username</Label>
					<Input
						id="username"
						type="text"
						value={username}
						onChange={event => setUsername(event.target.value)}
					/>
				</Group>
				<Group>
					<Label htmlFor="email">email</Label>
					<Input
						id="email"
						type="email"
						value={email}
						onChange={event => setEmail(event.target.value)}
					/>
				</Group>
				<Group>
					<Label htmlFor="password-one">password</Label>
					<Input
						id="password-one"
						type="password"
						value={passwordOne}
						onChange={event => setPasswordOne(event.target.value)}
					/>
				</Group>
				<Group>
					<Label htmlFor="password-two">confirm password</Label>
					<Input
						id="password-two"
						type="password"
						value={passwordTwo}
						onChange={event => setPasswordTwo(event.target.value)}
					/>
				</Group>
				<Button type="submit">sign up</Button>
			</Form>
			<Prompt>
				Already have an account? <Link to="/sign-in">Sign in</Link>
			</Prompt>
		</Container>
	);
};

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { userSignUp })(SignUp);
