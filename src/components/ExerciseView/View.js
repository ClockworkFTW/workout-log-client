import React from "react";
import styled from "styled-components";

import { Header3 } from "../common";
import Anatomy from "../common/Anatomy";

const Container = styled.div`
	height: 100%;
	padding: 20px;
	overflow: scroll;
`;

const View = ({ exercise }) => (
	<Container>
		<Anatomy active={exercise.muscle} />
	</Container>
);

export default View;
