import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { userSignOut } from "../reducers/user";

const Container = styled.div``;
const Prompt = styled.p``;
const Group = styled.div``;
const Button = styled.button``;

const SignOut = ({ userSignOut }) => (
	<Container>
		<Prompt>Are you sure you want to sign out?</Prompt>
		<Group>
			<Button onClick={userSignOut}>yes</Button>
			<Link to="/dashboard">
				<Button>no</Button>
			</Link>
		</Group>
	</Container>
);

export default connect(null, { userSignOut })(SignOut);
