import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchExercises } from "../../reducers/exercise-list";
import { fetchWorkouts } from "../../reducers/workout-list";
import { fetchMeasurements } from "../../reducers/measurement-list";
import MainLayout from "../common/MainLayout";

const Dashboard = props => {
	const { user, fetchExercises, fetchWorkouts, fetchMeasurements } = props;

	// Fetch all data
	useEffect(() => {
		const { token } = user;
		fetchExercises(token);
		fetchWorkouts(token);
		fetchMeasurements(token);
	}, []);

	return (
		<MainLayout>
			<Menu>
				<h1>menu</h1>
			</Menu>
			<Container>
				<h1>{user.username}</h1>
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
	user: state.user.data
});

const mapActionsToProps = {
	fetchExercises,
	fetchWorkouts,
	fetchMeasurements
};

export default connect(mapStateToProp, mapActionsToProps)(Dashboard);
