import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { Header1 } from "../common";
import Anatomy from "../common/Anatomy";
import MainLayout from "../common/MainLayout";

const Container = styled.div`
	height: 100%;
	padding: 20px;
	overflow: scroll;
`;

const ExerciseView = ({ exercises }) => {
	const { id } = useParams();
	const exercise = exercises.find(exercise => exercise._id === id);

	return (
		<MainLayout>
			<Container>
				<Header1>{exercise.name}</Header1>
				<Anatomy active={exercise.muscle} />
			</Container>
		</MainLayout>
	);
};

const mapStateToProps = state => ({ exercises: state.exerciseList.data });

export default connect(mapStateToProps)(ExerciseView);
