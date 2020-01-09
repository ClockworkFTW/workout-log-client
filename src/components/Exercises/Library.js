import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { readExercise } from "../../reducers/exercise";
import Card from "./Card";

const Container = styled.div`
	padding: 0px 10px 10px 10px;
`;

const Library = ({ token, exercises, readExercise, active, editing }) => {
	useEffect(() => {
		if (exercises.length === 0) {
			readExercise(token);
		}
	}, []);

	return active || editing ? null : (
		<Container>
			{exercises.map(exercise => (
				<Card key={exercise._id} exercise={exercise} />
			))}
		</Container>
	);
};

const filterExercises = state => {
	const exercises = state.exercises.data;
	const { name, category, bodypart } = state.filter;

	let filteredExercises = exercises.filter(exercise =>
		exercise.name.includes(name.toLowerCase())
	);

	filteredExercises =
		category === "all"
			? filteredExercises
			: filteredExercises.filter(
					exercise => exercise.category === category
			  );

	filteredExercises =
		bodypart === "all"
			? filteredExercises
			: filteredExercises.filter(
					exercise => exercise.bodypart === bodypart
			  );

	return filteredExercises;
};

const mapStateToProps = state => ({
	token: state.user.data.token,
	exercises: filterExercises(state),
	active: state.exercises.active,
	editing: state.exercises.editing
});

export default connect(mapStateToProps, { readExercise })(Library);
