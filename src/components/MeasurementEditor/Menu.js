import React from "react";
import styled from "styled-components";

import { ButtonPrimary, ButtonAction } from "../common";

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Group = styled.div``;

const Menu = ({ addMeasurement, handleSave, clearMeasurement }) => (
	<Container>
		<ButtonAction width="260px" onClick={addMeasurement}>
			add measurement
		</ButtonAction>
		<Group>
			<ButtonPrimary onClick={clearMeasurement}>back</ButtonPrimary>
			<ButtonAction onClick={handleSave}>save</ButtonAction>
		</Group>
	</Container>
);

export default Menu;
