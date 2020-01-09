import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

import { readExercise } from "../../../reducers/exercise";
import Item from "./Item";

const Container = styled.div`
	flex: 0 0 300px;
	height: 100%;
	padding: 0px 20px;
	overflow: scroll;
`;

const Picker = ({ token, exercises, readExercise }) => {
	useEffect(() => {
		if (exercises.length === 0) {
			readExercise(token);
		}
	});

	return (
		<Droppable droppableId="workout-picker">
			{(provided, snapshot) => (
				<Container ref={provided.innerRef} {...provided.droppableProps}>
					{exercises.map((exercise, index) => (
						<Item
							key={exercise._id}
							exercise={exercise}
							index={index}
						/>
					))}
					{provided.placeholder}
				</Container>
			)}
		</Droppable>
	);
};

const mapStateToProps = state => ({
	token: state.user.data.token,
	exercises: state.exercises.data
});

export default connect(mapStateToProps, { readExercise })(Picker);
