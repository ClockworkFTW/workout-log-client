import React from "react";
import styled from "styled-components";

import { Header2, Paragraph } from "../../common";

const Container = styled.div``;
const Step = styled.h1`
	float: left;
	width: 40px;
	margin-right: 20px;
	color: #ffffff;
	background: #7f9cf5;
	border-radius: 5px;
	text-align: center;
	line-height: 40px;
	font-size: 28px;
	font-weight: 700;
`;

const Name = ({ step, title, caption }) => (
	<Container>
		<Step>{step}</Step>
		<Header2>{title}</Header2>
		<Paragraph>{caption}</Paragraph>
	</Container>
);

export default Name;
