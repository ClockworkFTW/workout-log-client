import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { finishWorkout } from "../../reducers/workout-session";
import MainLayout from "../common/MainLayout";
import Menu from "./Menu";
import Session from "./Session";

const WorkoutSession = ({ workout, finishWorkout }) =>
	workout ? (
		<MainLayout>
			<Menu finishWorkout={finishWorkout} />
			<Session workout={workout} />
		</MainLayout>
	) : (
		<Redirect to={"/workout-list"} />
	);

const mapStateToProps = state => ({ workout: state.workoutSession });

const mapActionsToProps = { finishWorkout };

export default connect(mapStateToProps, mapActionsToProps)(WorkoutSession);
