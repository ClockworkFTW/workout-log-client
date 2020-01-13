import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

import { setType } from "../../../config";
import {
	modifyExercise,
	removeExercise
} from "../../../reducers/workout-editor";
import SelectInput from "../../common/SelectInput";
import { Input, Label, Group, Header3 } from "../../common";

const Container = styled.div`
	margin-bottom: 20px;
	padding: 20px;
	border-radius: 5px;
	background: #ffffff;
	border: 1px solid #e2e8f0;
`;
const Row = styled.div`
	display: flex;
`;

const EditorItem = ({ exercise, modifyExercise, removeExercise, index }) => (
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
				<Row>
					<Group margin="0px 10px 0px 0px">
						<Label htmlFor="sets">sets</Label>
						<Input
							id="sets"
							type="number"
							width="60px"
							value={exercise.sets}
							onChange={event =>
								modifyExercise(
									exercise.dragId,
									"sets",
									event.target.value
								)
							}
						/>
					</Group>
					<Group margin="0px 10px 0px 0px">
						<Label htmlFor="reps">reps</Label>
						<Input
							id="reps"
							type="number"
							width="60px"
							value={exercise.reps}
							onChange={event =>
								modifyExercise(
									exercise.dragId,
									"reps",
									event.target.value
								)
							}
						/>
					</Group>
					<Group margin="0px 10px 0px 0px">
						<Label htmlFor="rest">rest</Label>
						<Input
							id="rest"
							type="number"
							width="60px"
							value={exercise.rest}
							onChange={event =>
								modifyExercise(
									exercise.dragId,
									"rest",
									event.target.value
								)
							}
						/>
					</Group>
					<Group margin="0px 10px 0px 0px">
						<Label htmlFor="type">type</Label>
						<SelectInput
							id="type"
							width="100px"
							options={setType}
							value={exercise.setType}
							setValue={option =>
								modifyExercise(
									exercise.dragId,
									"setType",
									option
								)
							}
						/>
					</Group>
				</Row>
				<button onClick={() => removeExercise(exercise.dragId)}>
					remove
				</button>
			</Container>
		)}
	</Draggable>
);

export default connect(null, { modifyExercise, removeExercise })(EditorItem);
