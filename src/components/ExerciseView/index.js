import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import MainLayout from "../common/MainLayout";

const Container = styled.div`
	padding: 20px;
`;

const ExerciseView = ({ exercises }) => {
	const { id } = useParams();
	const exercise = exercises.find(exercise => exercise._id === id);

	return (
		<MainLayout>
			<Container>
				<h1>Exercise View</h1>
				<h2>{exercise.name}</h2>
			</Container>
		</MainLayout>
	);
};

const mapStateToProps = state => ({ exercises: state.exerciseList.data });

export default connect(mapStateToProps)(ExerciseView);
