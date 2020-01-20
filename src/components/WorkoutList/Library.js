import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchWorkouts } from "../../reducers/workout-list";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";

const Container = styled.div`
	height: calc(100% - 75px);
	padding: 20px 10px 20px 10px;
	overflow: scroll;
`;

const Library = ({ token, workouts, fetchWorkouts, error }) => {
	useEffect(() => {
		if (workouts.length === 0) {
			fetchWorkouts(token);
		}
	}, []);

	return error ? (
		<ErrorMessage message={error.response.data.message} />
	) : (
		<Container>
			{workouts.map(workout => (
				<Card key={workout._id} workout={workout} />
			))}
		</Container>
	);
};

const mapStateToProps = state => ({
	token: state.user.data.token,
	workouts: state.workoutList.data,
	error: state.workoutList.error
});

export default connect(mapStateToProps, { fetchWorkouts })(Library);
