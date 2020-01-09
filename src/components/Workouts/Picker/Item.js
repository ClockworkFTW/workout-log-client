import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

import Anatomy from "../../Exercises/Anatomy";

const Container = styled.div`
	margin-bottom: 20px;
	padding: 20px;
	border: 1px solid #e2e8f0;
	border-radius: 5px;
	background: #ffffff;
`;

const Item = ({ exercise, index }) => (
	<Draggable draggableId={exercise._id} index={index}>
		{(provided, snapshot) => (
			<Container
				ref={provided.innerRef}
				{...provided.draggableProps}
				{...provided.dragHandleProps}
			>
				<h1>{exercise.name}</h1>
				<Anatomy active={exercise.bodypart} width="100%" />
				<h1>{exercise.bodypart}</h1>
				<h1>{exercise.category}</h1>
				<h1>{exercise.difficulty}</h1>
			</Container>
		)}
	</Draggable>
);

export default Item;
