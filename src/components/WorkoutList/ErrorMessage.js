import React from "react";
import styled from "styled-components";

import { Header3 } from "../common";

const Container = styled.div`
	padding: 20px;
	background: #ffffff;
	border-radius: 5px;
	border: 1px solid #e2e8f0;
`;

const ErrorMessage = ({ message }) => (
	<Container>
		<Header3>{message}</Header3>
	</Container>
);

export default ErrorMessage;
