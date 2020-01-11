import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { addExercise } from "../../../reducers/workout-editor";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Item = ({ exercise, addExercise }) => (
	<Container>
		<h1>{exercise.name}</h1>
		<button onClick={() => addExercise(exercise)}>add</button>
	</Container>
);

export default connect(null, { addExercise })(Item);
