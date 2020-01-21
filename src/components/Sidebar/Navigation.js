import React from "react";
import styled from "styled-components";
import { withRouter, Link as A } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
	margin: 20px 0px;
`;
const Link = styled(A)`
	padding: 10px 20px;
	opacity: ${props => (props.active ? "1" : "0.5")};
	background: ${props => (props.active ? "#1A202C" : "none")};
	display: block;
	font-size: 14px;
	text-decoration: none;
	text-transform: capitalize;
	color: #ffffff;
	&:hover {
		opacity: 1;
		background: #1a202c;
	}
`;
const Icon = styled(FontAwesomeIcon)`
	width: 20px !important;
	color: #ffffff;
`;
const Text = styled.span`
	margin-left: 10px;
`;

const isActive = (path, pathname) => (pathname.includes(path) ? true : false);

const Navigation = ({ toggle, location }) => (
	<Container toggle={toggle}>
		<Link
			to="/dashboard"
			active={isActive("/dashboard", location.pathname)}
		>
			<Icon icon={["fas", "home"]} />
			{toggle && <Text>dashboard</Text>}
		</Link>
		<Link
			to="/exercise-list"
			active={isActive("/exercise", location.pathname)}
		>
			<Icon icon={["fas", "dumbbell"]} />
			{toggle && <Text>exercises</Text>}
		</Link>
		<Link
			to="/workout-list"
			active={isActive("/workout", location.pathname)}
		>
			<Icon icon={["fas", "clipboard"]} />
			{toggle && <Text>workouts</Text>}
		</Link>
		<Link to="/measure" active={isActive("/measure", location.pathname)}>
			<Icon icon={["fas", "ruler-vertical"]} />
			{toggle && <Text>measurements</Text>}
		</Link>
		<Link to="/profile" active={isActive("/profile", location.pathname)}>
			<Icon icon={["fas", "cog"]} />
			{toggle && <Text>settings</Text>}
		</Link>
	</Container>
);

export default withRouter(Navigation);
