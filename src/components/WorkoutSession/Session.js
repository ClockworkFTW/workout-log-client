import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 100%;
	padding: 20px;
	overflow: scroll;
`;

const Session = ({ workout }) => (
	<Container>
		<h1>{workout.name}</h1>
		{workout.exercises.map(exercise => (
			<h1>{exercise.exercise.name}</h1>
		))}
	</Container>
);

export default Session;
