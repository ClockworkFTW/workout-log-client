import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import MainLayout from "../common/MainLayout";
import { Button } from "../common";
import { initWorkout, newWorkout } from "../../reducers/workout-editor";

const Container = styled.div``;

const WorkoutList = ({ initWorkout, newWorkout, isEditing }) => {
	// Check local storage to see if a workout was being edited
	useEffect(() => {
		initWorkout();
	}, []);

	// If a workout was being edited, redirect to the editor, otherwise render the list
	return isEditing ? (
		<Redirect to="/workout-editor" />
	) : (
		<Container>
			<MainLayout>
				<h1>Workout List</h1>
				<Button onClick={newWorkout}>new</Button>
			</MainLayout>
		</Container>
	);
};

const mapStateToProps = state => ({ isEditing: state.workoutEditor });

export default connect(mapStateToProps, { initWorkout, newWorkout })(
	WorkoutList
);
