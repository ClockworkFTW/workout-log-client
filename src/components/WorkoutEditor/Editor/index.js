import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { createWorkout, updateWorkout } from "../../../reducers/workout-list";
import { clearWorkout } from "../../../reducers/workout-editor";
import { Button } from "../../common";
import Details from "./Details";
import ExerciseList from "./ExerciseList";

const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 0px 20px 20px 0px;
	overflow: scroll;
`;

const Editor = ({
	token,
	workout,
	createWorkout,
	updateWorkout,
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

	return (
		<Container>
			<Details workout={workout} />
			<ExerciseList exercises={workout.exercises} />
			<Button width="100%" onClick={handleCreate}>
				{workout.isNew ? "create" : "update"}
			</Button>
		</Container>
	);
};

const mapStateToProps = state => ({ token: state.user.data.token });

export default connect(mapStateToProps, {
	createWorkout,
	updateWorkout,
	clearWorkout
})(Editor);
