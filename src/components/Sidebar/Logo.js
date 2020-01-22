import React from "react";
import styled from "styled-components";
import { Link as A } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
	padding: 0px 20px;
	border-bottom: 1px solid #4a5568;
`;
const Link = styled(A)`
	line-height: ${props => props.height};
	text-decoration: none;
	color: #ffffff;
	font-size: 24px;
	font-weight: 700;
`;
const Icon = styled(FontAwesomeIcon)``;
const Text = styled.span`
	margin-left: 10px;
`;

const Logo = ({ toggle, title, headerHeight }) => (
	<Container>
		<Link to="/dashboard" height={headerHeight}>
			<Icon icon={["fas", "dumbbell"]} />
			{toggle && <Text>{title}</Text>}
		</Link>
	</Container>
);

export default Logo;
