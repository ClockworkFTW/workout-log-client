import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { initWorkout, reorderExercise } from "../../../reducers/workout-editor";
import Item from "./Item";

const Container = styled.div`
	height: 100%;
`;

const Editor = ({ initWorkout, exercises, reorderExercise }) => {
	useEffect(() => {
		initWorkout();
	}, []);

	const onDragEnd = useCallback(result => {
		console.log(result);
		reorderExercise(result);
	}, []);

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="workout-editor">
				{(provided, snapshot) => (
					<Container
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{exercises.map((exercise, index) => (
							<Item
								key={exercise._id}
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

const mapStateToProps = state => ({ exercises: state.workoutEditor });

export default connect(mapStateToProps, { initWorkout, reorderExercise })(
	Editor
);
