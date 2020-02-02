import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { initWorkout } from "../../reducers/workout-editor";

import MainLayout from "../common/MainLayout";
import Menu from "./Menu";
import Library from "./Library";

const WorkoutList = ({ initWorkout, isEditing, isSession }) => {
	// Check local storage to see if a workout was being edited
	useEffect(() => {
		initWorkout();
	}, []);

	// If a workout was being edited, redirect to the editor, otherwise render the list
	return !isEditing && !isSession ? (
		<MainLayout>
			<Menu />
			<Library />
		</MainLayout>
	) : (
		<Redirect to={isEditing ? "/workout-editor" : "/workout-session"} />
	);
};

const mapStateToProps = state => ({
	isEditing: state.workoutEditor,
	isSession: state.workoutSession.workout
});

export default connect(mapStateToProps, { initWorkout })(WorkoutList);
