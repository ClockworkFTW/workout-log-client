import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Filter from "./Filter";
import { ButtonPrimary } from "../common";
import { newExercise } from "../../reducers/exercise-editor";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Menu = ({ newExercise }) => (
	<Container>
		<Filter />
		<ButtonPrimary onClick={newExercise}>new</ButtonPrimary>
	</Container>
);

export default connect(null, { newExercise })(Menu);
