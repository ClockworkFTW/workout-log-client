import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { startWorkout } from "../../reducers/workout-session";
import { editWorkout } from "../../reducers/workout-editor";

import Card from "./Card";
import ErrorMessage from "../common/ErrorMessage";

const Container = styled.div`
	height: 100%;
	padding: 20px 10px 20px 10px;
	overflow: scroll;
`;

const Library = ({ workouts, startWorkout, editWorkout, error }) => {
	return !error ? (
		<Container>
			{workouts.map(workout => (
				<Card
					key={workout._id}
					workout={workout}
					startWorkout={startWorkout}
					editWorkout={editWorkout}
				/>
			))}
		</Container>
	) : (
		<ErrorMessage message={error.response.data.message} />
	);
};

const mapStateToProps = state => ({
	workouts: state.workoutList.data,
	error: state.workoutList.error
});

const mapActionsToProps = {
	startWorkout,
	editWorkout
};

export default connect(mapStateToProps, mapActionsToProps)(Library);
