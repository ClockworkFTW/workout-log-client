import React from "react";
import styled from "styled-components";
import moment from "moment";

const History = ({ sessions }) =>
	sessions ? (
		<Wrapper>
			{sessions.map(session => (
				<Container>
					<h1>{session.workout.name}</h1>
					<h1>{moment(session.time.start).format("M-D-YYYY")}</h1>
					<ul>
						{session.workout.exercises.map((exercise, index) => (
							<li>
								<h1>
									{index + 1} {exercise.exercise.name}
								</h1>
								{exercise.sets.map(set => (
									<h1>
										{set.weight} x {set.reps}
									</h1>
								))}
							</li>
						))}
					</ul>
				</Container>
			))}
		</Wrapper>
	) : null;

const Wrapper = styled.div``;
const Container = styled.div`
	float: left;
	margin: 20px;
	padding: 20px;
	background: #ffffff;
	border-radius: 4px;
`;

export default History;
