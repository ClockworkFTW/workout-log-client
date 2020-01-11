import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Filter from "./Filter";
import Button from "../common/Button";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
`;

const Menu = () => (
	<Container>
		<Filter />
		<Link to="exercise-editor">
			<Button
				width="90px"
				icon={["fas", "plus-square"]}
				text="create"
				render={true}
			/>
		</Link>
	</Container>
);

export default Menu;
