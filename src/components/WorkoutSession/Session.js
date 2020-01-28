import React from "react";
import styled from "styled-components";

import Exercise from "./Exercise";

const Container = styled.div`
	height: 100%;
	padding: 20px;
	overflow: scroll;
`;

const Session = ({ workout, completeSet }) => (
	<Container>
		{workout.exercises.map((exercise, index) => (
			<Exercise
				key={index}
				exercise={exercise}
				exerciseIndex={index}
				completeSet={completeSet}
			/>
		))}
	</Container>
);

export default Session;
