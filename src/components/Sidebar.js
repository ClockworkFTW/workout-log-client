import React from "react";
import styled from "styled-components";
import { Link as A } from "react-router-dom";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

const Container = styled.div`
	flex: 0 0 240px;
	padding: 20px;
	background: #4c51bf;
`;
const Links = styled.div`
	display: flex;
	flex-direction: column;
`;
const Link = styled(A)`
	margin-bottom: 20px;
	font-size: 14px;
	font-weight: 700;
	text-decoration: none;
	text-transform: uppercase;
	color: #ffffff;
`;
const Icon = styled(I)`
	margin-right: 10px;
	color: #ffffff;
`;

const Sidebar = () => (
	<Container>
		<Links>
			<Link to="/dashboard">
				<Icon icon={["fas", "tachometer-alt"]} />
				dashboard
			</Link>
			<Link to="/exercises">
				<Icon icon={["fas", "dumbbell"]} />
				exercises
			</Link>
			<Link to="/workouts">
				<Icon icon={["fas", "clipboard"]} />
				workouts
			</Link>
			<Link to="/schedule">
				<Icon icon={["fas", "calendar-alt"]} />
				schedule
			</Link>
		</Links>
	</Container>
);

export default Sidebar;
