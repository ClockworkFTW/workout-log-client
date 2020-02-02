import React from "react";
import styled from "styled-components";

import { Input } from "../../common";

const Container = styled.div``;

const Name = ({ name, modifyExercise }) => (
	<Container>
		<Input
			type="text"
			width="100%"
			value={name}
			onChange={event => modifyExercise("name", event.target.value)}
		/>
	</Container>
);

export default Name;
