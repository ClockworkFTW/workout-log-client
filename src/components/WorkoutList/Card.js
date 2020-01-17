import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { editWorkout } from "../../reducers/workout-editor";
import { Header3, Tag, Button } from "../common";

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

const muscles = exercises =>
	exercises.map(exercise => exercise.exercise.muscle);

const Card = ({ workout, editWorkout }) => (
	<Container>
		<Header3>{workout.name}</Header3>
		{muscles(workout.exercises).map((muscle, index) => (
			<Tag key={index} style={{ margin: "0px 10px 10px 0px" }}>
				{muscle}
			</Tag>
		))}
		<Button onClick={() => editWorkout(workout)}>edit</Button>
	</Container>
);

export default connect(null, { editWorkout })(Card);
