import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { userSignOut } from "../reducers/user";
import { Paragraph, ButtonPrimary, ButtonAction } from "./common";

const Wrapper = styled.div`
	height: calc(100vh - 45px);
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #edf2f7;
`;
const Container = styled.div`
	max-width: 300px;
	padding: 20px;
	background: #ffffff;
	border-radius: 5px;
	border: 1px solid #e2e8f0;
	text-align: center;
`;
const Group = styled.div`
	display: flex;
	justify-content: space-between;
`;

const SignOut = ({ userSignOut }) => (
	<Wrapper>
		<Container>
			<Paragraph>Are you sure you want to sign out?</Paragraph>
			<Group>
				<ButtonAction onClick={userSignOut}>yes</ButtonAction>
				<Link to="/dashboard">
					<ButtonPrimary>no</ButtonPrimary>
				</Link>
			</Group>
		</Container>
	</Wrapper>
);

export default connect(null, { userSignOut })(SignOut);
