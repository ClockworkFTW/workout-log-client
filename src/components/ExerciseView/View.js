import React from "react";
import styled from "styled-components";

import Anatomy from "../common/Anatomy";
import History from "./History";
import Instructions from "./Instructions";

const Container = styled.div`
	height: 100%;
	padding: 20px;
	overflow: scroll;
`;

const View = ({ exercise }) => (
	<Container>
		<Anatomy width="200px" active={exercise.muscle} />
		<Instructions instructions={exercise.instructions} />
		<History id={exercise._id} />
	</Container>
);

export default View;
