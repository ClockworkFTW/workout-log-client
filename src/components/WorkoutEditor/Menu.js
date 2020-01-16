import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { Button } from "../common";
import { clearWorkout } from "../../reducers/workout-editor";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
`;

const Menu = ({ clearWorkout }) => (
	<Container>
		<h1>Menu</h1>
		<Button onClick={clearWorkout}>clear</Button>
	</Container>
);

export default connect(null, { clearWorkout })(Menu);
