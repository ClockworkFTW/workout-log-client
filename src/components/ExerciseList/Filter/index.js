import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { clearExerciseFilter } from "../../../reducers/exercise-filter";
import { Button } from "../../common";
import Name from "./Name";
import Type from "./Type";
import Muscle from "./Muscle";

const Container = styled.div`
	display: flex;
`;

const Filter = ({ clearExerciseFilter }) => (
	<Container>
		<Name />
		<Type />
		<Muscle />
		<Button onClick={clearExerciseFilter}>clear</Button>
	</Container>
);

export default connect(null, { clearExerciseFilter })(Filter);
