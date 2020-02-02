import React from "react";
import styled from "styled-components";

import { ButtonPrimary } from "../../common";
import Anatomy from "../../common/Anatomy";

const Container = styled.div``;

const Review = ({ exercise, handleSubmit, handleDelete }) => (
	<Container>
		<h1>{exercise.name}</h1>
		<h2>{exercise.muscle}</h2>
		<h2>{exercise.type}</h2>
		<Anatomy active={exercise.muscle} width="60%" />
		<ButtonPrimary onClick={handleSubmit}>
			{exercise.isNew ? "create" : "update"}
		</ButtonPrimary>
		{!exercise.isNew && (
			<ButtonPrimary onClick={handleDelete}>delete</ButtonPrimary>
		)}
	</Container>
);

export default Review;
