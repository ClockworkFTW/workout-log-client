import React from "react";
import styled from "styled-components";

import SetRow from "./SetRow";

const Table = styled.table`
	width: 100%;
	margin: 15px 0px;
`;
const Cell = styled.th`
	padding: 5px;
	text-align: ${props => props.align};
	text-transform: capitalize;
	font-size: 12px;
	color: #2d3748;
`;

const SetTable = ({ exercise }) => (
	<Table>
		<thead>
			<tr>
				<Cell align="left">set</Cell>
				<Cell align="left">type</Cell>
				<Cell align="left">reps</Cell>
				<Cell align="left">weight</Cell>
				<Cell align="left">rest</Cell>
			</tr>
		</thead>
		<tbody>
			{exercise.sets.map((set, index) => (
				<SetRow
					key={index}
					id={exercise.dragId}
					index={index}
					set={set}
				/>
			))}
		</tbody>
	</Table>
);

export default SetTable;
