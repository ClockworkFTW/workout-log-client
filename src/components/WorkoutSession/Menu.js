import React from "react";
import styled from "styled-components";

import { ButtonPrimary } from "../common";

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Menu = ({ finishWorkout }) => (
	<Container>
		<h1>menu</h1>
		<ButtonPrimary onClick={finishWorkout}>finish</ButtonPrimary>
	</Container>
);

export default Menu;
