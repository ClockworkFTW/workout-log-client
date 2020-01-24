import React from "react";
import styled from "styled-components";

import { ButtonPrimary, ButtonAction } from "../common";

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Buttons = styled.div``;

const Menu = ({ handleSave, clearMeasurement }) => (
	<Container>
		<h1>menu</h1>
		<Buttons>
			<ButtonPrimary onClick={clearMeasurement}>back</ButtonPrimary>
			<ButtonAction onClick={handleSave}>save</ButtonAction>
		</Buttons>
	</Container>
);

export default Menu;
