import React from "react";
import styled from "styled-components";

import { Header3 } from "../common";

const Container = styled.div`
	padding: 20px;
`;

const List = ({ measurements }) =>
	measurements ? (
		<Container>
			{measurements.sections.map(section => (
				<Header3>{section.id}</Header3>
			))}
		</Container>
	) : null;

export default List;
