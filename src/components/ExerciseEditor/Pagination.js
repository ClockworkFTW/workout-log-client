import React from "react";
import styled from "styled-components";

import { ButtonClear, Icon } from "../common";

const Container = styled.div`
	padding: 20px 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid #e2e8f0;
`;

const Progress = styled.div`
	width: 100%;
	height: 10px;
	margin: 0px 20px;
	border-radius: 2px;
	background: #e2e8f0;
	overflow: hidden;
`;

const Bar = styled.div`
	width: ${props => props.complete};
	height: 10px;
	background: #7f9cf5;
`;

const Pagination = ({ step, setStep }) => (
	<Container>
		<ButtonClear onClick={() => setStep(step - 1)} disabled={step === 1}>
			<Icon
				icon={["fas", "caret-left"]}
				fontSize="16px"
				color="#7F9CF5"
			/>
		</ButtonClear>
		<Progress>
			<Bar complete={`${(step / 6) * 100}%`} />
		</Progress>
		<ButtonClear onClick={() => setStep(step + 1)} disabled={step === 6}>
			<Icon
				icon={["fas", "caret-right"]}
				fontSize="16px"
				color="#7F9CF5"
			/>
		</ButtonClear>
	</Container>
);

export default Pagination;
