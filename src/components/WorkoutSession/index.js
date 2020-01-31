import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { createHistory } from "../../reducers/workout-history";
import {
	modifySet,
	startRestTimer,
	resetRestTimer,
	finishWorkout
} from "../../reducers/workout-session";
import MainLayout from "../common/MainLayout";
import Menu from "./Menu";
import Workout from "./Workout";

const WorkoutSession = props => {
	const {
		token,
		session,
		createHistory,
		finishWorkout,
		modifySet,
		startRestTimer,
		resetRestTimer
	} = props;

	const { workout } = session;

	return workout ? (
		<MainLayout>
			<Menu
				token={token}
				session={session}
				createHistory={createHistory}
				finishWorkout={finishWorkout}
			/>
			<Workout
				workout={workout}
				modifySet={modifySet}
				startRestTimer={startRestTimer}
				resetRestTimer={resetRestTimer}
			/>
		</MainLayout>
	) : (
		<Redirect to={"/workout-list"} />
	);
};

const mapStateToProps = state => ({
	token: state.user.data.token,
	session: state.workoutSession
});

const mapActionsToProps = {
	modifySet,
	startRestTimer,
	resetRestTimer,
	createHistory,
	finishWorkout
};

export default connect(mapStateToProps, mapActionsToProps)(WorkoutSession);
