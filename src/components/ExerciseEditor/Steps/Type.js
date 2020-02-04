import React from "react";
import styled from "styled-components";

import { type as typeOptions } from "../../../config";

const Type = ({ type, modifyExercise }) => (
	<Container>
		<Options>
			{typeOptions.map(option => (
				<Option
					active={type === option}
					onClick={() => modifyExercise("type", option)}
				>
					{option}
				</Option>
			))}
		</Options>
	</Container>
);

const Container = styled.div``;
const Options = styled.ul``;
const Option = styled.li`
	display: inline-block;
	margin: 4px;
	padding: 5px;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 700;
	color: #ffffff;
	background: ${props => (props.active ? "#5a67d8" : "#809cf5")};
	border-radius: 4px;
	&:hover {
		cursor: pointer;
		background: #5a67d8;
	}
`;

export default Type;
