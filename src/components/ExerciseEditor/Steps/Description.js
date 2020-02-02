import React from "react";
import styled from "styled-components";

import { Input } from "../../common";

const Container = styled.div``;

const Description = ({ description, modifyExercise }) => (
	<Container>
		<Input
			type="text"
			width="100%"
			value={description}
			onChange={event =>
				modifyExercise("description", event.target.value)
			}
		/>
	</Container>
);

export default Description;
