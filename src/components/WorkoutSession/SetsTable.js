import React from "react";
import styled from "styled-components";

import SetsRow from "./SetsRow";

const headers = [
	{ align: "left", text: "done" },
	{ align: "center", text: "type" },
	{ align: "center", text: "weight" },
	{ align: "center", text: "sets" },
	{ align: "center", text: "rest" },
	{ align: "right", text: "drop" }
];

const SetsTable = ({
	exercise,
	exrInd,
	modifySet,
	startRestTimer,
	resetRestTimer
}) => (
	<Container>
		<thead>
			<tr>
				{headers.map((header, index) => (
					<Cell key={index} align={header.align}>
						{header.text}
					</Cell>
				))}
			</tr>
		</thead>
		<tbody>
			{exercise.sets.map((set, index) => (
				<SetsRow
					set={set}
					setInd={index}
					exrInd={exrInd}
					modifySet={modifySet}
					startRestTimer={startRestTimer}
					resetRestTimer={resetRestTimer}
				/>
			))}
		</tbody>
	</Container>
);

const Container = styled.table`
	width: 100%;
	padding: 12px;
	border-collapse: separate;
	border-spacing: 0px 4px;
`;

const Cell = styled.th`
	padding: 4px 12px;
	text-align: ${props => props.align};
	font-size: 12px;
	text-transform: uppercase;
	color: #a0aec0;
`;

export default SetsTable;
