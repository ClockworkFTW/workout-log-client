import React from "react";
import styled from "styled-components";

import Anatomy from "../common/Anatomy";
import Description from "./Description";
import History from "./History";

const Container = styled.div`
	height: 100%;
	padding: 20px;
	overflow: scroll;
`;

const View = ({ exercise }) => (
	<Container>
		<Anatomy width="200px" active={exercise.muscle} />
		<Description description={exercise.description} />
		<History id={exercise._id} />
	</Container>
);

export default View;
