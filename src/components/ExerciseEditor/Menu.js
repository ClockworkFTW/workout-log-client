import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { ButtonPrimary } from "../common";
import { clearExercise } from "../../reducers/exercise-editor";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Menu = ({ clearExercise }) => (
	<Container>
		<ButtonPrimary onClick={clearExercise}>cancel</ButtonPrimary>
	</Container>
);

export default connect(null, { clearExercise })(Menu);
