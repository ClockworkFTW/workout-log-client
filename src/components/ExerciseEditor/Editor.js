import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { modifyExercise, clearExercise } from "../../reducers/exercise-editor";
import {
	createExercise,
	updateExercise,
	deleteExercise
} from "../../reducers/exercise-list";
import { Input, Label, Group, ButtonPrimary } from "../common";
import Anatomy from "../common/Anatomy";
import SelectInput from "../common/SelectInput";
import { difficulty, muscle, type } from "../../config";

const Container = styled.div`
	height: 100%;
	padding: 20px;
	overflow: scroll;
`;

const Editor = props => {
	const {
		token,
		exercise,
		createExercise,
		updateExercise,
		deleteExercise,
		modifyExercise,
		clearExercise
	} = props;

	const handleSubmit = () => {
		exercise.isNew
			? createExercise(token, exercise)
			: updateExercise(token, exercise);
		clearExercise();
	};

	const handleDelete = () => {
		deleteExercise(token, exercise._id);
		clearExercise();
	};

	return (
		<Container>
			<Group>
				<Label htmlFor="name">name</Label>
				<Input
					id="name"
					type="text"
					width="200px"
					value={exercise.name}
					onChange={event =>
						modifyExercise("name", event.target.value)
					}
				/>
			</Group>
			<Group>
				<Label htmlFor="difficulty">Difficulty</Label>
				<SelectInput
					id="difficulty"
					width="200px"
					options={difficulty}
					value={exercise.difficulty}
					setValue={option => modifyExercise("difficulty", option)}
				/>
			</Group>
			<Group>
				<Label htmlFor="muscle">Muscle</Label>
				<SelectInput
					id="muscle"
					width="200px"
					options={muscle}
					value={exercise.muscle}
					setValue={option => modifyExercise("muscle", option)}
				/>
			</Group>
			<Group>
				<Label htmlFor="type">Type</Label>
				<SelectInput
					id="type"
					width="200px"
					options={type}
					value={exercise.type}
					setValue={option => modifyExercise("type", option)}
				/>
			</Group>
			<Anatomy active={exercise.muscle} width="200px" />
			<ButtonPrimary onClick={handleSubmit}>
				{exercise.isNew ? "create" : "update"}
			</ButtonPrimary>
			{!exercise.isNew && (
				<ButtonPrimary onClick={handleDelete}>delete</ButtonPrimary>
			)}
		</Container>
	);
};

const mapStateToProps = state => ({
	token: state.user.data.token,
	exercise: state.exerciseEditor
});

export default connect(mapStateToProps, {
	createExercise,
	updateExercise,
	deleteExercise,
	modifyExercise,
	clearExercise
})(Editor);
