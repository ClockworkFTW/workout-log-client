import React from "react";
import styled from "styled-components";

import { Header3 } from "../common";
import Chart from "../common/Chart";

const Wrapper = styled.div`
	padding: 20px 20px 0px 20px;
`;

const Container = styled.div`
	margin-bottom: 20px;
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
				<Chart
					width="100%"
					height="200px"
					color="#687eea"
					grid={false}
					area={true}
					data={section}
				/>
			</Container>
		))}
	</Wrapper>
);

export default List;
