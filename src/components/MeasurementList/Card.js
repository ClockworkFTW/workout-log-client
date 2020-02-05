import React from "react";
import styled from "styled-components";

import { Header3 } from "../common";
import Chart from "../common/Chart";

const Card = ({ measurement, editMeasurement }) => (
	<Container onClick={() => editMeasurement(measurement)}>
		<Header3>{measurement.id}</Header3>
		<Chart
			width="100%"
			height="200px"
			color="#687eea"
			grid={false}
			area={true}
			data={measurement}
		/>
	</Container>
);

const Container = styled.div`
	margin-bottom: 20px;
	&:hover {
		cursor: pointer;
	}
`;

export default Card;
