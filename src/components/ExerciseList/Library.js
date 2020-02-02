import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Card from "./Card";
import ErrorMessage from "../common/ErrorMessage";

const Container = styled.div`
	padding: 20px 10px 0px 10px;
`;

const Library = ({ exercises, error }) => {
	return !error ? (
		<Container>
			{exercises.map(exercise => (
				<Card key={exercise._id} exercise={exercise} />
			))}
		</Container>
	) : (
		<ErrorMessage message={error.response.data.message} />
	);
};

const filterExercises = state => {
	const exercises = state.exerciseList.data;
	const { name, type, muscle } = state.exerciseFilter;

	let filteredExercises = exercises.filter(exercise =>
		exercise.name.includes(name.toLowerCase())
	);

	filteredExercises =
		type === "all"
			? filteredExercises
			: filteredExercises.filter(exercise => exercise.type === type);

	filteredExercises =
		muscle === "all"
			? filteredExercises
			: filteredExercises.filter(exercise => exercise.muscle === muscle);

	return filteredExercises;
};

const mapStateToProps = state => ({
	exercises: filterExercises(state),
	error: state.exerciseList.error
});

export default connect(mapStateToProps)(Library);
