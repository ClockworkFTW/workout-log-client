import React from "react";
import styled from "styled-components";

import SelectInput from "../../common/SelectInput";
import Anatomy from "../../common/Anatomy";
import { muscle as muscleOptions } from "../../../config";

const Container = styled.div``;

const Muscle = ({ muscle, modifyExercise }) => (
	<Container>
		<SelectInput
			width="100%"
			options={muscleOptions}
			value={muscle}
			setValue={option => modifyExercise("muscle", option)}
		/>
		<Anatomy active={muscle} width="60%" />
	</Container>
);

export default Muscle;
