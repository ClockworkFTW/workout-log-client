import React, { useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { reorderExercise } from "../../../reducers/workout-editor";
import Exercise from "./Exercise";

const Container = styled.div``;

const ExerciseList = ({ exercises, reorderExercise }) => {
	const onDragEnd = useCallback(result => reorderExercise(result), []);

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="workout-editor">
				{(provided, snapshot) => (
					<Container
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{exercises.map((exercise, index) => (
							<Exercise
								key={exercise.dragId}
								exercise={exercise}
								index={index}
							/>
						))}
						{provided.placeholder}
					</Container>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default connect(null, { reorderExercise })(ExerciseList);
