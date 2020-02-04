import React from "react";
import styled from "styled-components";
import moment from "moment";

import { Header3, Header5, Metadata, Icon } from "../../common";

const Session = ({ session }) => (
	<Container>
		<Header>
			<Header3>{session.workout.name}</Header3>
			<Metadata>
				<Icon icon={["far", "calendar"]} margin="0px 4px 0px 0px" />
				{moment(session.time.start).format("MMM Do, YYYY")}
			</Metadata>
		</Header>
		<ul>
			{session.workout.exercises.map((exercise, index) => (
				<li>
					<Header5>{exercise.exercise.name}</Header5>
					<Sets>
						{exercise.sets.map(set => (
							<li>
								{set.weight} x {set.reps}
							</li>
						))}
					</Sets>
				</li>
			))}
		</ul>
	</Container>
);

const Container = styled.div`
	flex: 0 0 150px;
	height: 100%;
	margin-right: 20px;
	padding: 20px;
	background: #ffffff;
	border-radius: 4px;
	overflow: scroll;
`;

const Header = styled.div`
	margin-bottom: 10px;
`;

const Sets = styled.ul`
	margin-left: 10px;
`;

export default Session;
