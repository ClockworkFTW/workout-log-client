import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import Chart from "../common/Chart";

const History = ({ id, history }) => {
	const data = generateData(id, history);
	return (
		<Container>
			<h1>1RM History</h1>
			<Chart
				width="100%"
				height="300px"
				padding="20px"
				color="#5A67D8"
				grid={false}
				area={false}
				data={data}
			/>
		</Container>
	);
};

const generateData = (id, history) => {
	let data = [];

	// Iterate through all sessions and locate exercises that match 'id'
	history.forEach(session => {
		session.workout.exercises.forEach(exercise => {
			if (exercise.exercise._id === id) {
				// Find the most challenging set of the exercise
				const maxSet = exercise.sets.reduce((prev, curr) => {
					if (prev.weight * prev.reps > curr.weight * curr.reps) {
						return prev;
					} else {
						return curr;
					}
				});

				// Calculate exercise one rep max using the Brzycki formula
				const oneRepMax = Math.round(
					maxSet.weight / (1.0278 - 0.0278 * maxSet.reps)
				);

				// Format time
				const time = moment(session.time.start).format("YYYY-MM-DD");

				// Push data point into array
				data.push({ x: time, y: oneRepMax });
			}
		});
	});

	return { id: "1RM", data };
};

const Container = styled.div``;

const mapStateToProps = state => ({ history: state.workoutHistory.data });

export default connect(mapStateToProps)(History);
