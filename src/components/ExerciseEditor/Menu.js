import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { ButtonPrimary } from "../common";
import { clearExercise } from "../../reducers/exercise-editor";

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Menu = ({ clearExercise }) => (
	<Container>
		<h1>menu</h1>
		<ButtonPrimary onClick={clearExercise}>cancel</ButtonPrimary>
	</Container>
);

export default connect(null, { clearExercise })(Menu);
