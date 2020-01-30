import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import MainLayout from "../common/MainLayout";
import Menu from "./Menu";
import Workout from "./Workout";

const WorkoutSession = ({ workout }) =>
	workout ? (
		<MainLayout>
			<Menu name={workout.name} />
			<Workout workout={workout} />
		</MainLayout>
	) : (
		<Redirect to={"/workout-list"} />
	);

const mapStateToProps = state => ({ workout: state.workoutSession.workout });

export default connect(mapStateToProps)(WorkoutSession);
