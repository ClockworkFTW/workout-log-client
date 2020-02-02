import React from "react";
import styled from "styled-components";

import { Label } from "../../common";
import SelectInput from "../../common/SelectInput";
import { type as typeOptions } from "../../../config";

const Container = styled.div``;

const Type = ({ type, modifyExercise }) => (
	<Container>
		<SelectInput
			width="100%"
			options={typeOptions}
			value={type}
			setValue={option => modifyExercise("type", option)}
		/>
	</Container>
);

export default Type;
