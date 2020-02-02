import React from "react";
import styled from "styled-components";

import SelectInput from "../../common/SelectInput";
import { difficulty as difficultyOptions } from "../../../config";

const Container = styled.div``;

const Difficulty = ({ difficulty, modifyExercise }) => (
	<Container>
		<SelectInput
			width="100%"
			options={difficultyOptions}
			value={difficulty}
			setValue={option => modifyExercise("difficulty", option)}
		/>
	</Container>
);

export default Difficulty;
