import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Filter from "./Filter";
import { ButtonPrimary } from "../common";
import { newExercise } from "../../reducers/exercise-editor";

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Menu = ({ newExercise }) => (
	<Container>
		<Filter />
		<ButtonPrimary onClick={newExercise}>new</ButtonPrimary>
	</Container>
);

export default connect(null, { newExercise })(Menu);
