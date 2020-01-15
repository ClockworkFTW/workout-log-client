import React from "react";
import styled from "styled-components";

import SetRow from "./SetRow";

const Table = styled.table`
	width: 100%;
	margin: 15px 0px;
`;
const Header = styled.thead``;
const Body = styled.tbody``;
const Th = styled.th`
	padding: 5px;
	text-align: ${props => props.align};
	text-transform: capitalize;
	font-size: 12px;
	color: #2d3748;
`;

const SetTable = ({ exercise }) => (
	<Table>
		<Header>
			<tr>
				<Th align="left">set</Th>
				<Th align="left">type</Th>
				<Th align="left">reps</Th>
				<Th align="left">weight</Th>
				<Th align="left">rest</Th>
			</tr>
		</Header>
		<Body>
			{exercise.sets.map((set, index) => (
				<SetRow
					key={index}
					id={exercise.dragId}
					index={index}
					set={set}
				/>
			))}
		</Body>
	</Table>
);

export default SetTable;
