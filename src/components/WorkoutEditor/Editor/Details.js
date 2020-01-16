import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { modifyWorkout } from "../../../reducers/workout-editor";
import { Group, Label, Input, TextArea } from "../../common";

const Container = styled.div``;

const Details = ({ workout, modifyWorkout }) => (
	<Container>
		<Group>
			<Label htmlFor="name">name</Label>
			<Input
				id="name"
				width="100%"
				value={workout.name}
				onChange={event => modifyWorkout("name", event.target.value)}
			/>
		</Group>
		<Group>
			<Label htmlFor="description">description</Label>
			<TextArea
				id="description"
				width="100%"
				value={workout.description}
				onChange={event =>
					modifyWorkout("description", event.target.value)
				}
			/>
		</Group>
	</Container>
);

const mapStateToProps = state => ({ workout: state.workoutEditor });

export default connect(mapStateToProps, { modifyWorkout })(Details);
