import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

import { userSignUp } from "../reducers/user";

import InputGroup from "./common/InputGroup";

const Container = styled.div``;
const Form = styled.form``;
const Button = styled.button``;
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
				<InputGroup
					id="username"
					label="username"
					type="text"
					value={username}
					setValue={setUsername}
				/>
				<InputGroup
					id="email"
					label="email"
					type="email"
					value={email}
					setValue={setEmail}
				/>
				<InputGroup
					id="password-one"
					label="password"
					type="password"
					value={passwordOne}
					setValue={setPasswordOne}
				/>
				<InputGroup
					id="password-two"
					label="confirm password"
					type="password"
					value={passwordTwo}
					setValue={setPasswordTwo}
				/>
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
