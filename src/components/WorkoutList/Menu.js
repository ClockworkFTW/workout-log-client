import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { Header3, ButtonPrimary } from "../common";
import { newWorkout } from "../../reducers/workout-editor";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Menu = ({ newWorkout }) => (
	<Container>
		<ButtonPrimary onClick={newWorkout}>new</ButtonPrimary>
	</Container>
);

export default connect(null, { newWorkout })(Menu);
