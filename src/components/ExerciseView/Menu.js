import React from "react";
import styled from "styled-components";

import { RouterLink, ButtonPrimary } from "../common";

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Menu = ({ name }) => (
	<Container>
		<h1>menu</h1>
		<RouterLink to="/exercise-list">
			<ButtonPrimary>back</ButtonPrimary>
		</RouterLink>
	</Container>
);

export default Menu;
