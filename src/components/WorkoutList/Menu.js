import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { ButtonPrimary } from "../common";
import { newWorkout } from "../../reducers/workout-editor";

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Menu = ({ newWorkout }) => (
	<Container>
		<h1>menu</h1>
		<ButtonPrimary onClick={newWorkout}>new</ButtonPrimary>
	</Container>
);

export default connect(null, { newWorkout })(Menu);
