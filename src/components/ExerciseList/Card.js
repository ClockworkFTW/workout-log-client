import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { editExercise } from "../../reducers/exercise-editor";
import Button from "../common/Button";

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
const Name = styled.h1`
	margin: 5px 0px 10px 0px;
	font-size: 20px;
	font-weight: 700;
	text-transform: capitalize;
	color: #2d3748;
`;
const Bodypart = styled.h3`
	display: inline-block;
	padding: 5px;
	font-size: 12px;
	font-weight: 700;
	text-transform: uppercase;
	border-radius: 5px;
	background: #677eea;
	color: #ffffff;
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
				<Name>{exercise.name}</Name>
				<Bodypart>{exercise.muscle}</Bodypart>
			</Content>
			<Buttons>
				<Link to={`/exercise-list/${exercise._id}`}>
					<Button
						icon={["fas", "expand"]}
						text="view"
						width="70px"
						render={true}
					/>
				</Link>
				<Button
					icon={["fas", "edit"]}
					text="edit"
					width="70px"
					render={!exercise.default}
					onClick={() => editExercise(exercise)}
				/>
			</Buttons>
		</Container>
	);
};

export default connect(null, { editExercise })(Card);
