import React from "react";
import styled from "styled-components";

import Event from "./Event";

const Container = styled.ul`
	flex: 0 0 300px;
	height: 100%;
	padding: 20px 20px 15px 20px;
	overflow: scroll;
`;

const History = ({ data, modifyMeasurement, deleteMeasurement }) => (
	<Container>
		{data.map((data, index) => (
			<Event
				key={index}
				index={index}
				data={data}
				modifyMeasurement={modifyMeasurement}
				deleteMeasurement={deleteMeasurement}
			/>
		))}
	</Container>
);

export default History;
