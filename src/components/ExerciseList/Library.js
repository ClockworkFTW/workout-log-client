import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Card from "./Card";
import { fetchExercises } from "../../reducers/exercise-list";

const Container = styled.div`
	height: calc(100% - 70px);
	padding: 0px 10px;
	overflow: scroll;
`;

const Library = ({ token, exercises, fetchExercises }) => {
	useEffect(() => {
		if (exercises.length === 0) {
			fetchExercises(token);
		}
	}, []);

	return (
		<Container>
			{exercises.map(exercise => (
				<Card key={exercise._id} exercise={exercise} />
			))}
		</Container>
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
	token: state.user.data.token,
	exercises: filterExercises(state)
});

export default connect(mapStateToProps, { fetchExercises })(Library);
