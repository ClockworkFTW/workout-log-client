import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Menu from "./Menu";
import View from "./View";
import MainLayout from "../common/MainLayout";

const ExerciseView = ({ exercises }) => {
	const { id } = useParams();
	const exercise = exercises.find(exercise => exercise._id === id);

	return (
		<MainLayout>
			<Menu name={exercise.name} />
			<View exercise={exercise} />
		</MainLayout>
	);
};

const mapStateToProps = state => ({ exercises: state.exerciseList.data });

export default connect(mapStateToProps)(ExerciseView);
