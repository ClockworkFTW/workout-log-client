import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import MainLayout from "../common/MainLayout";
import Menu from "./Menu";
import Editor from "./Editor";

const ExerciseList = ({ isEditing }) => {
	return isEditing ? (
		<MainLayout>
			<Menu />
			<Editor />
		</MainLayout>
	) : (
		<Redirect to="/exercise-list" />
	);
};

const mapStateToProps = state => ({ isEditing: state.exerciseEditor });

export default connect(mapStateToProps)(ExerciseList);
