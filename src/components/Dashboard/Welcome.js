import React from "react";
import styled from "styled-components";

import { Header3 } from "../common";

const Welcome = ({ user }) => (
	<Container>
		<Header3 color="light">Welcome {user.username}!</Header3>
	</Container>
);

const Container = styled.div`
	padding: 40px;
	background: #7f9cf5;
	border-radius: 8px;
`;

export default Welcome;
