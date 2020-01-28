import React from "react";
import styled from "styled-components";
import { completeSet } from "../../reducers/workout-session";

const Wrapper = styled.div``;
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: ${props => (props.complete ? "green" : "none")};
`;

const Exercise = ({ exercise, exerciseIndex, completeSet }) => (
	<Wrapper>
		<h1>{exercise.exercise.name}</h1>
		{exercise.sets.map((set, index) => (
			<Container complete={set.complete}>
				<button onClick={() => completeSet(exerciseIndex, index)}>
					complete
				</button>
				<h1>{set.setType}</h1>
				<h1>{set.weight}</h1>
				<h1>{set.reps}</h1>
				<h1>{set.rest}</h1>
			</Container>
		))}
	</Wrapper>
);

export default Exercise;
