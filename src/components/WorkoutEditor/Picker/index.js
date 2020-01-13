import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchExercises } from "../../../reducers/exercise-list";
import Item from "./Item";

const Container = styled.div`
	flex: 0 0 300px;
	height: 100%;
	padding: 0px 20px;
	overflow: scroll;
`;

const Picker = ({ token, exercises, fetchExercises }) => {
	useEffect(() => {
		if (exercises.length === 0) {
			fetchExercises(token);
		}
	}, []);

	return (
		<Container>
			{exercises.map(exercise => (
				<Item key={exercise._id} exercise={exercise} />
			))}
		</Container>
	);
};

const mapStateToProps = state => ({
	token: state.user.data.token,
	exercises: state.exerciseList.data
});

export default connect(mapStateToProps, { fetchExercises })(Picker);
