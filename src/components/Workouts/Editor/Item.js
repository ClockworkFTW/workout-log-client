import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

import {
	updateExercise,
	removeExercise
} from "../../../reducers/workout-editor";

const Container = styled.div``;

const Name = styled.h1``;

const EditorItem = ({ exercise, removeExercise, index }) => (
	<Draggable draggableId={exercise._id} index={index}>
		{(provided, snapshot) => (
			<Container
				ref={provided.innerRef}
				{...provided.draggableProps}
				{...provided.dragHandleProps}
			>
				<Name>{exercise.name}</Name>
				<button onClick={() => removeExercise(exercise._id)}>
					remove
				</button>
			</Container>
		)}
	</Draggable>
);

export default connect(null, { updateExercise, removeExercise })(EditorItem);
