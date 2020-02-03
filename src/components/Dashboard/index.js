import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchExercises } from "../../reducers/exercise-list";
import { fetchWorkouts } from "../../reducers/workout-list";
import { fetchHistory } from "../../reducers/workout-history";
import { fetchMeasurements } from "../../reducers/measurement-list";

import MainLayout from "../common/MainLayout";
import Profile from "./Profile";
import History from "./History";

const Dashboard = props => {
	const {
		user,
		sessions,
		fetchExercises,
		fetchWorkouts,
		fetchHistory,
		fetchMeasurements
	} = props;

	// Fetch all data
	useEffect(() => {
		const { token } = user;
		fetchExercises(token);
		fetchWorkouts(token);
		fetchHistory(token);
		fetchMeasurements(token);
	}, []);

	return (
		<MainLayout>
			<Menu>
				<h1>menu</h1>
			</Menu>
			<Container>
				<Profile user={user} />
				<History sessions={sessions} />
			</Container>
		</MainLayout>
	);
};

const Menu = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Container = styled.div`
	padding: 20px;
`;

const mapStateToProp = state => ({
	user: state.user.data,
	sessions: state.workoutHistory.data
});

const mapActionsToProps = {
	fetchExercises,
	fetchWorkouts,
	fetchHistory,
	fetchMeasurements
};

export default connect(mapStateToProp, mapActionsToProps)(Dashboard);
