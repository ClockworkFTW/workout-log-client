import React from "react";
import styled from "styled-components";

import { Header3 } from "../common";
import Chart from "./Chart";

const Wrapper = styled.div`
	padding: 20px 20px 0px 20px;
`;

const Container = styled.div`
	margin-bottom: 20px;
	padding: 20px;
	border: 1px solid #e2e8f0;
	border-radius: 5px;
	background: #ffffff;
	&:hover {
		cursor: pointer;
	}
`;

const List = ({ measurements, editMeasurement }) => (
	<Wrapper>
		{measurements.sections.map(section => (
			<Container
				key={section.id}
				onClick={() => editMeasurement(section)}
			>
				<Header3>{section.id}</Header3>
				<Chart width="100%" height="200px" data={section} />
			</Container>
		))}
	</Wrapper>
);

export default List;
