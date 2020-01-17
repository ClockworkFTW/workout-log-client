import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { Header3, Button } from "../common";
import { newWorkout } from "../../reducers/workout-editor";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
`;

const Menu = ({ newWorkout }) => (
	<Container>
		<Header3>Menu</Header3>
		<Button onClick={newWorkout}>new</Button>
	</Container>
);

export default connect(null, { newWorkout })(Menu);
