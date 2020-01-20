import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { ButtonPrimary } from "../common";
import { clearWorkout } from "../../reducers/workout-editor";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Menu = ({ clearWorkout }) => (
	<Container>
		<ButtonPrimary onClick={clearWorkout}>cancel</ButtonPrimary>
	</Container>
);

export default connect(null, { clearWorkout })(Menu);
