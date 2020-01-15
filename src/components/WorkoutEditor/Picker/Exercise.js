import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { addExercise } from "../../../reducers/workout-editor";
import { Header4, Metadata } from "../../common";
import AnatomyFocused from "../../common/AnatomyFocused";

const Container = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	padding: 10px;
	border-radius: 5px;
	background: #ffffff;
	border: 1px solid #e2e8f0;
	transition: all ease-in-out 0.2s;
	&:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
`;

const Image = styled.div`
	position: relative;
	flex: 0 0 100px;
	background: linear-gradient(
		rgba(255, 255, 255, 0) 0%,
		rgba(255, 255, 255, 1) 100%
	);
`;

const Overlay = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	background: linear-gradient(
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 255, 255, 0) 30%,
		rgba(255, 255, 255, 0) 70%,
		rgba(255, 255, 255, 1) 100%
	);
`;

const Content = styled.div`
	margin: 0px 10px;
`;

const Exercise = ({ exercise, addExercise }) => (
	<Container onClick={() => addExercise(exercise)}>
		<Image>
			<Overlay />
			<AnatomyFocused active={exercise.muscle} width="100%" />
		</Image>
		<Content>
			<Metadata>{exercise.type}</Metadata>
			<Header4>{exercise.name}</Header4>
		</Content>
	</Container>
);

export default connect(null, { addExercise })(Exercise);
