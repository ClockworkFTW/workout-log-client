import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
	createWorkout,
	updateWorkout,
	deleteWorkout
} from "../../../reducers/workout-list";
import { clearWorkout } from "../../../reducers/workout-editor";
import { ButtonAction } from "../../common";
import Details from "./Details";
import ExerciseList from "./ExerciseList";

const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 20px 20px 20px 0px;
	overflow: scroll;
`;

const Editor = ({
	token,
	workout,
	createWorkout,
	updateWorkout,
	deleteWorkout,
	clearWorkout
}) => {
	const handleCreate = () => {
		const exercises = workout.exercises.map(exercise => ({
			exercise: exercise.exercise._id,
			sets: exercise.sets
		}));

		const workoutObject = { ...workout, exercises };

		workout.isNew
			? createWorkout(token, workoutObject)
			: updateWorkout(token, workoutObject);

		clearWorkout();
	};

	const handleDelete = () => {
		deleteWorkout(token, workout._id);
		clearWorkout();
	};

	return (
		<Container>
			<Details workout={workout} />
			<ExerciseList exercises={workout.exercises} />
			<ButtonAction width="100%" onClick={handleCreate}>
				{workout.isNew ? "create" : "update"}
			</ButtonAction>
			{!workout.isNew && (
				<ButtonAction width="100%" onClick={handleDelete}>
					delete
				</ButtonAction>
			)}
		</Container>
	);
};

const mapStateToProps = state => ({ token: state.user.data.token });

export default connect(mapStateToProps, {
	createWorkout,
	updateWorkout,
	deleteWorkout,
	clearWorkout
})(Editor);
