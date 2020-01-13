import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { editExercise } from "../../reducers/exercise-editor";
import { Header3, Button, Tag } from "../common";

const Container = styled.div`
	position: relative;
	float: left;
	width: calc(20% - 20px);
	height: 200px;
	margin: 0px 10px 20px 10px;
	padding: 20px;
	background: #ffffff;
	border-radius: 5px;
	border: 1px solid #e2e8f0;
`;
const Content = styled.div``;
const Category = styled.h3`
	text-transform: capitalize;
	font-size: 14px;
	color: #a0aec0;
`;

const Buttons = styled.div`
	position: absolute;
	bottom: 20px;
	left: 20px;
	right: 20px;
	display: flex;
	justify-content: space-between;
`;

const Card = ({ exercise, editExercise }) => {
	return (
		<Container>
			<Content>
				<Category>{exercise.type}</Category>
				<Header3>{exercise.name}</Header3>
				<Tag>{exercise.muscle}</Tag>
			</Content>
			<Buttons>
				<Link to={`/exercise-list/${exercise._id}`}>
					<Button>view</Button>
				</Link>
				{!exercise.default && (
					<Button onClick={() => editExercise(exercise)}>edit</Button>
				)}
			</Buttons>
		</Container>
	);
};

export default connect(null, { editExercise })(Card);
