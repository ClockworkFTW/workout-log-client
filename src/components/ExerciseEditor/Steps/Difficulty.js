import React from "react";
import styled from "styled-components";

import { difficulty as difficultyOptions } from "../../../config";
import { Header3 } from "../../common";

const Difficulty = ({ difficulty, modifyExercise }) => (
	<Container>
		<Options>
			{difficultyOptions.map(option => (
				<Option
					active={difficulty === option}
					onClick={() => modifyExercise("difficulty", option)}
				>
					<Header3>{option}</Header3>
				</Option>
			))}
		</Options>
	</Container>
);

const Container = styled.div``;
const Options = styled.ul`
	display: flex;
`;
const Option = styled.li`
	width: 160px;
	height: 160px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 16px;
	padding: 40px;
	background: #ffffff;
	border-radius: 4px;
	border: ${props => `2px solid ${props.active ? "#5a67d8" : "#ffffff"}`};
	transition: 0.2s ease-in-out all;
	&:hover {
		cursor: pointer;
		transform: scale(1.2);
		border: 2px solid #5a67d8;
	}
`;

export default Difficulty;
