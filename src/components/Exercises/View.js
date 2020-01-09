import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Anatomy from "./Anatomy";

const Container = styled.div`
	padding: 0px 20px 20px 20px;
`;
const Name = styled.h1`
	font-size: 20px;
	font-weight: 700;
	text-transform: capitalize;
	color: #2d3748;
`;
const Category = styled.h3`
	margin-bottom: 5px;
	text-transform: capitalize;
	font-size: 14px;
	color: #a0aec0;
`;
const Bodypart = styled.h3`
	margin: 10px 0px 20px 0px;
	display: inline-block;
	padding: 5px;
	font-size: 12px;
	font-weight: 700;
	text-transform: uppercase;
	border-radius: 5px;
	background: #677eea;
	color: #ffffff;
`;
const Description = styled.p`
	line-height: 24px;
	color: #4a5568;
`;

const View = ({ exercise }) =>
	exercise ? (
		<Container>
			<Anatomy active={exercise.bodypart} width="300px" height="300px" />
			<Category>{exercise.category}</Category>
			<Name>{exercise.name}</Name>
			<Bodypart>{exercise.bodypart}</Bodypart>
			<Description>{exercise.description}</Description>
		</Container>
	) : null;

const mapStateToProps = state => ({ exercise: state.exercises.active });

export default connect(mapStateToProps)(View);
