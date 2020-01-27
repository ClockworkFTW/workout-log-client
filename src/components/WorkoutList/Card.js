import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { startWorkout } from "../../reducers/workout-session";
import { editWorkout } from "../../reducers/workout-editor";
import { Header3, Tag, ButtonPrimary } from "../common";

const Container = styled.div`
	position: relative;
	float: left;
	width: calc(20% - 20px);
	height: 200px;
	margin: 0px 10px 20px 10px;
	padding: 20px;
	background: #ffffff;
	border-radius: 5px;
	border: 1px solid #e2e8f0;
`;

const Buttons = styled.div`
	position: absolute;
	bottom: 20px;
	left: 20px;
	right: 20px;
	display: flex;
	justify-content: space-between;
`;

const getMuscles = exercises => {
	const muscles = exercises.map(exercise => exercise.exercise.muscle);
	return [...new Set(muscles)];
};

const Card = ({ workout, startWorkout, editWorkout }) => (
	<Container>
		<Header3>{workout.name}</Header3>
		{getMuscles(workout.exercises).map((muscle, index) => (
			<Tag key={index} style={{ margin: "0px 10px 10px 0px" }}>
				{muscle}
			</Tag>
		))}
		<Buttons>
			<ButtonPrimary onClick={() => startWorkout(workout)}>
				start
			</ButtonPrimary>
			<ButtonPrimary onClick={() => editWorkout(workout)}>
				edit
			</ButtonPrimary>
		</Buttons>
	</Container>
);

export default connect(null, { startWorkout, editWorkout })(Card);
