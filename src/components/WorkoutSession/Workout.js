import React, { useCallback } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Exercise from "./Exercise";

const Wrapper = styled.div`
	width: 100%;
	padding: 0px 20px;
	overflow: scroll;
`;
const Container = styled.div`
	max-width: 500px;
	margin: 20px auto;
`;

const Workout = props => {
	const {
		workout,
		reorderExercise,
		modifySet,
		startRestTimer,
		resetRestTimer
	} = props;

	const onDragEnd = useCallback(result => reorderExercise(result), []);

	return (
		<Wrapper>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="workout-session">
					{(provided, snapshot) => (
						<Container
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{workout.exercises.map((exercise, index) => (
								<Exercise
									key={exercise.exercise.dragId}
									exercise={exercise}
									exrInd={index}
									modifySet={modifySet}
									startRestTimer={startRestTimer}
									resetRestTimer={resetRestTimer}
								/>
							))}
							{provided.placeholder}
						</Container>
					)}
				</Droppable>
			</DragDropContext>
		</Wrapper>
	);
};

export default Workout;
