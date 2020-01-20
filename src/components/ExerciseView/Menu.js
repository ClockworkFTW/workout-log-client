import React from "react";
import styled from "styled-components";

import { Header3, RouterLink, ButtonPrimary } from "../common";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Menu = ({ name }) => (
	<Container>
		<Header3>{name}</Header3>
		<RouterLink to="/exercise-list">
			<ButtonPrimary>back</ButtonPrimary>
		</RouterLink>
	</Container>
);

export default Menu;
