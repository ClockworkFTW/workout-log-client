import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
	modifySet,
	startRestTimer,
	resetRestTimer
} from "../../reducers/workout-session";
import Exercise from "./Exercise";

const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 0px 20px;
	overflow: scroll;
`;

const Workout = ({ workout, modifySet, startRestTimer, resetRestTimer }) => (
	<Container>
		{workout.exercises.map((exercise, index) => (
			<Exercise
				key={index}
				exercise={exercise}
				exerciseIndex={index}
				modifySet={modifySet}
				startRestTimer={startRestTimer}
				resetRestTimer={resetRestTimer}
			/>
		))}
	</Container>
);

const mapActionsToProps = {
	modifySet,
	startRestTimer,
	resetRestTimer
};

export default connect(null, mapActionsToProps)(Workout);
