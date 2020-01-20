import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

import SetTable from "./SetTable";
import { removeExercise, addSet } from "../../../reducers/workout-editor";
import { Header3, Metadata, ButtonPrimary } from "../../common";

const Container = styled.div`
	position: relative;
	margin-bottom: 20px;
	padding: 20px;
	border-radius: 5px;
	background: #ffffff;
	border: 1px solid #e2e8f0;
`;

const Info = styled.div``;

const Exercise = ({ exercise, removeExercise, addSet, index }) => (
	<Draggable draggableId={exercise.dragId} index={index}>
		{(provided, snapshot) => (
			<Container
				ref={provided.innerRef}
				{...provided.draggableProps}
				{...provided.dragHandleProps}
			>
				<Info>
					<Metadata>{exercise.exercise.type}</Metadata>
					<Header3>{exercise.exercise.name}</Header3>
				</Info>
				<SetTable exercise={exercise} />
				<ButtonPrimary
					width="100%"
					onClick={() => addSet(exercise.dragId)}
				>
					add set
				</ButtonPrimary>
				<ButtonPrimary
					onClick={() => removeExercise(exercise.dragId)}
					style={{ position: "absolute", top: "20px", right: "20px" }}
				>
					remove
				</ButtonPrimary>
			</Container>
		)}
	</Draggable>
);

export default connect(null, { removeExercise, addSet })(Exercise);
