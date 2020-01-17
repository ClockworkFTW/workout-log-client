import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import MainLayout from "../common/MainLayout";
import Menu from "./Menu";
import Library from "./Library";
import { initWorkout } from "../../reducers/workout-editor";

const Container = styled.div``;

const WorkoutList = ({ initWorkout, isEditing }) => {
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
				<Menu />
				<Library />
			</MainLayout>
		</Container>
	);
};

const mapStateToProps = state => ({ isEditing: state.workoutEditor });

export default connect(mapStateToProps, { initWorkout })(WorkoutList);
