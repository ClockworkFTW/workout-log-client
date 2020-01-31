import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { ButtonPrimary } from "../common";

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Menu = ({ name }) => {
	const history = useHistory();
	return (
		<Container>
			<h1>{name}</h1>
			<ButtonPrimary onClick={() => history.goBack()}>back</ButtonPrimary>
		</Container>
	);
};

export default Menu;
