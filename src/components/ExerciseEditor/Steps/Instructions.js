import React from "react";
import styled from "styled-components";

import { Group, TextArea, ButtonPrimary } from "../../common";

const Container = styled.div``;

const Instructions = ({
	instructions,
	addInstruction,
	modifyInstruction,
	removeInstruction
}) => (
	<Container>
		{instructions.map((instruction, index) => (
			<Group>
				{index + 1}
				<TextArea
					type="text"
					width="100%"
					value={instruction}
					onChange={event =>
						modifyInstruction(index, event.target.value)
					}
				/>
				<ButtonPrimary onClick={() => removeInstruction(index)}>
					remove instruction
				</ButtonPrimary>
			</Group>
		))}
		<ButtonPrimary onClick={addInstruction}>add instruction</ButtonPrimary>
	</Container>
);

export default Instructions;
