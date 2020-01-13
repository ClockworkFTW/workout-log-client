import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { addExercise } from "../../../reducers/workout-editor";
import { Group, Header3, Tag, Button } from "../../common";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
	padding: 20px;
	border-radius: 5px;
	background: #ffffff;
	border: 1px solid #e2e8f0;
`;

const Exercise = ({ exercise, addExercise }) => (
	<Container>
		<Group>
			<Header3>{exercise.name}</Header3>
			<Tag>{exercise.muscle}</Tag>
		</Group>
		<Button onClick={() => addExercise(exercise)}>add</Button>
	</Container>
);

export default connect(null, { addExercise })(Exercise);
