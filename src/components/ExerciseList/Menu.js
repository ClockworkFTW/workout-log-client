import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Filter from "./Filter";
import { Button } from "../common";
import { newExercise } from "../../reducers/exercise-editor";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
`;

const Menu = ({ newExercise }) => (
	<Container>
		<Filter />
		<Button onClick={newExercise}>new</Button>
	</Container>
);

export default connect(null, { newExercise })(Menu);
