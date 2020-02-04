import React from "react";
import styled from "styled-components";

import Anatomy from "../../common/Anatomy";
import { muscle as muscleOptions } from "../../../config";

const Muscle = ({ muscle, modifyExercise }) => (
	<Container>
		<Anatomy active={muscle} />
		<Options>
			{muscleOptions.map(option => (
				<Option
					active={muscle === option}
					onClick={() => modifyExercise("muscle", option)}
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

export default Muscle;
