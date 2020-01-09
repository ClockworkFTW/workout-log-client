import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
	createExercise,
	updateExercise,
	destroyExercise,
	setEditing
} from "../../reducers/exercise";
import InputGroup from "../common/InputGroup";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import SelectInput from "../common/SelectInput";
import Button from "../common/Button";
import { difficulties, categories, bodyparts } from "../../config";
import Anatomy from "./Anatomy";

const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: 20px 20px 60px 20px;
`;
const Form = styled.form``;
const Center = styled.div`
	width: 100%;
	text-align: center;
`;
const Group = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Editor = props => {
	const {
		token,
		exercise,
		createExercise,
		updateExercise,
		destroyExercise,
		setEditing
	} = props;

	const [name, setName] = useState(exercise.name);
	const [difficulty, setDifficulty] = useState(exercise.difficulty);
	const [category, setCategory] = useState(exercise.category);
	const [bodypart, setBodypart] = useState(exercise.bodypart);
	const [description, setDescription] = useState(exercise.description);

	const id = exercise._id;

	const handleSubmit = event => {
		event.preventDefault();

		const obj = { name, difficulty, category, bodypart, description };

		if (exercise.new) {
			createExercise(token, obj);
		} else {
			updateExercise(token, id, obj);
		}
	};

	const handleDelete = event => {
		event.preventDefault();
		destroyExercise(token, id);
	};

	const handleCancel = event => {
		event.preventDefault();
		setEditing(null);
	};

	return exercise ? (
		<Container>
			<Form onSubmit={handleSubmit}>
				<InputGroup id="name" label="name" margin="20px">
					<Input
						width="100%"
						id="name"
						type="text"
						value={name}
						setValue={setName}
					/>
				</InputGroup>
				<InputGroup id="difficulty" label="difficulty" margin="20px">
					<SelectInput
						width="100%"
						options={difficulties}
						value={difficulty}
						setValue={setDifficulty}
					/>
				</InputGroup>
				<Center>
					<Anatomy active={bodypart} width="60%" />
				</Center>
				<InputGroup id="bodypart" label="body part" margin="20px">
					<SelectInput
						width="100%"
						options={bodyparts}
						value={bodypart}
						setValue={setBodypart}
					/>
				</InputGroup>
				<InputGroup id="category" label="category" margin="20px">
					<SelectInput
						width="100%"
						options={categories}
						value={category}
						setValue={setCategory}
					/>
				</InputGroup>
				<InputGroup id="description" label="description" margin="20px">
					<TextArea
						width="100%"
						height="200px"
						value={description}
						setValue={setDescription}
					/>
				</InputGroup>
				<Group>
					<Button
						type="submit"
						render={true}
						text={exercise.new ? "create" : "update"}
					/>
					<Button
						text="delete"
						render={!exercise.new}
						onClick={handleDelete}
					/>
					<Button
						text="cancel"
						render={true}
						onClick={handleCancel}
					/>
				</Group>
			</Form>
		</Container>
	) : null;
};

const mapStateToProps = state => ({
	token: state.user.data.token,
	exercise: state.exercises.editing
});

export default connect(mapStateToProps, {
	createExercise,
	updateExercise,
	destroyExercise,
	setEditing
})(Editor);
