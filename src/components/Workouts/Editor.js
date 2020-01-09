import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
	height: 100%;
`;

const Editor = () => (
	<Droppable droppableId="workout-editor">
		{(provided, snapshot) => (
			<Container ref={provided.innerRef} {...provided.droppableProps}>
				{provided.placeholder}
			</Container>
		)}
	</Droppable>
);

export default Editor;
