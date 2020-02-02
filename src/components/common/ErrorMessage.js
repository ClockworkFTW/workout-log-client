import React from "react";
import styled from "styled-components";

import { Header3 } from "./index";

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	max-width: 200px;
	padding: 20px;
	background: #ffffff;
	border-radius: 5px;
	border: 1px solid #e2e8f0;
	text-align: center;
`;

const ErrorMessage = ({ message }) => (
	<Wrapper>
		<Container>
			<Header3>{message}</Header3>
		</Container>
	</Wrapper>
);

export default ErrorMessage;
