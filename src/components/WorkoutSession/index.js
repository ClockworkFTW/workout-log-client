import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { completeSet, finishWorkout } from "../../reducers/workout-session";
import MainLayout from "../common/MainLayout";
import Menu from "./Menu";
import Session from "./Session";

const WorkoutSession = props => {
	const {
		workout,
		startedAt,
		finishedAt,
		completeSet,
		finishWorkout
	} = props;

	return workout ? (
		<MainLayout>
			<Menu
				name={workout.name}
				startedAt={startedAt}
				finishedAt={finishedAt}
				finishWorkout={finishWorkout}
			/>
			<Session workout={workout} completeSet={completeSet} />
		</MainLayout>
	) : (
		<Redirect to={"/workout-list"} />
	);
};

const mapStateToProps = state => ({
	workout: state.workoutSession.workout,
	startedAt: state.workoutSession.startedAt,
	finishedAt: state.workoutSession.finishedAt
});

const mapActionsToProps = { completeSet, finishWorkout };

export default connect(mapStateToProps, mapActionsToProps)(WorkoutSession);
