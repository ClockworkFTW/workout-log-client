import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { ButtonPrimary } from "../common";
import { clearWorkout } from "../../reducers/workout-editor";

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Menu = ({ clearWorkout }) => (
	<Container>
		<h1>menu</h1>
		<ButtonPrimary onClick={clearWorkout}>cancel</ButtonPrimary>
	</Container>
);

export default connect(null, { clearWorkout })(Menu);
