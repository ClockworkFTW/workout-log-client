import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { initExercise } from "../../reducers/exercise-editor";
import MainLayout from "../common/MainLayout";
import Menu from "./Menu";
import Library from "./Library";

const ExerciseList = ({ isEditing, initExercise }) => {
	// Check local storage to see if an exercise was being edited
	useEffect(() => {
		initExercise();
	}, []);

	// If an exercise is being edited redirect to the editor otherwise render the list
	return isEditing ? (
		<Redirect to="/exercise-editor" />
	) : (
		<MainLayout>
			<Menu />
			<Library />
		</MainLayout>
	);
};

const mapStateToProps = state => ({ isEditing: state.exerciseEditor });

export default connect(mapStateToProps, { initExercise })(ExerciseList);
