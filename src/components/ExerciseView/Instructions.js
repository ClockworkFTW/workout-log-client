import React from "react";
import styled from "styled-components";

import { Paragraph } from "../common";

const Container = styled.div``;

const Description = ({ instructions }) => (
	<Container>
		{instructions.map(instruction => (
			<Paragraph>{instruction}</Paragraph>
		))}
	</Container>
);

export default Description;
