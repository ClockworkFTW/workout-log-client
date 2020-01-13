import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

import Set from "./Set";
import { removeExercise, addSet } from "../../../reducers/workout-editor";
import { Header3, Button } from "../../common";

const Container = styled.div`
	position: relative;
	margin-bottom: 20px;
	padding: 20px;
	border-radius: 5px;
	background: #ffffff;
	border: 1px solid #e2e8f0;
`;

const Exercise = ({ exercise, removeExercise, addSet, index }) => (
	<Draggable draggableId={exercise.dragId} index={index}>
		{(provided, snapshot) => (
			<Container
				ref={provided.innerRef}
				{...provided.draggableProps}
				{...provided.dragHandleProps}
			>
				<Header3>
					{index + 1}. {exercise.name}
				</Header3>
				{exercise.sets.map((set, index) => (
					<Set
						key={index}
						id={exercise.dragId}
						index={index}
						set={set}
					/>
				))}
				<Button onClick={() => addSet(exercise.dragId)}>add set</Button>
				<Button
					onClick={() => removeExercise(exercise.dragId)}
					style={{ position: "absolute", top: "20px", right: "20px" }}
				>
					remove
				</Button>
			</Container>
		)}
	</Draggable>
);

export default connect(null, { removeExercise, addSet })(Exercise);
