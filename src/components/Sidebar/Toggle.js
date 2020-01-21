import React from "react";
import styled from "styled-components";
import { Link as A } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
	position: absolute;
	bottom: 10px;
	left: 0px;
	right: 0px;
`;
const Link = styled(A)`
	padding: 10px 20px;
	opacity: 0.5;
	display: block;
	font-size: 14px;
	text-decoration: none;
	text-transform: capitalize;
	color: #ffffff;
	&:hover {
		opacity: 1;
		background: #4a5568;
	}
`;
const Button = styled.button`
	opacity: 0.5;
	width: 100%;
	padding: 10px 20px;
	border: none;
	background: none;
	outline: none;
	text-align: left;
	color: #ffffff;
	font-family: inherit;
	font-size: 14px;
	text-transform: capitalize;
	&:hover {
		cursor: pointer;
		opacity: 1;
		background: #4a5568;
	}
`;
const Icon = styled(FontAwesomeIcon)`
	width: 20px !important;
	color: #ffffff;
`;
const Text = styled.span`
	margin-left: 10px;
`;

const Navigation = ({ toggle, toggleSidebar }) => (
	<Container>
		<Link to="/sign-out">
			<Icon icon={["fas", "sign-out-alt"]} />
			{toggle && <Text>sign out</Text>}
		</Link>
		<Button onClick={toggleSidebar}>
			<Icon icon={["fas", toggle ? "chevron-left" : "chevron-right"]} />
			{toggle && <Text>hide</Text>}
		</Button>
	</Container>
);

export default Navigation;
