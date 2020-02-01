import React from "react";
import styled from "styled-components";

import { setType } from "../../config";
import { ButtonClear, Icon } from "../common";
import SelectInput from "../common/SelectInput";

const SetsRow = ({
	set,
	setInd,
	exrInd,
	modifySet,
	startRestTimer,
	resetRestTimer
}) => (
	<tr>
		<Cell
			align="left"
			borderRadius={"5px 0px 0px 5px"}
			complete={set.complete}
		>
			<ButtonClear
				onClick={() => {
					resetRestTimer();
					if (!set.complete) {
						startRestTimer(set.rest);
					}
					modifySet(
						"edit",
						"complete",
						!set.complete,
						exrInd,
						setInd
					);
				}}
			>
				<Icon
					icon={["fas", "check-square"]}
					fontSize="20px"
					color={set.complete ? "#9AE6B4" : "#edf2f7"}
				/>
			</ButtonClear>
		</Cell>
		<Cell width="140px" align="center" complete={set.complete}>
			<SelectInput
				width="100%"
				options={setType}
				value={set.setType}
				setValue={option =>
					modifySet("edit", "setType", option, exrInd, setInd)
				}
			/>
		</Cell>
		<Cell align="center" complete={set.complete}>
			<Input
				complete={set.complete}
				type="number"
				value={set.weight}
				onChange={event =>
					modifySet(
						"edit",
						"weight",
						event.target.value,
						exrInd,
						setInd
					)
				}
			/>
		</Cell>
		<Cell align="center" complete={set.complete}>
			<Input
				complete={set.complete}
				type="number"
				value={set.reps}
				onChange={event =>
					modifySet(
						"edit",
						"reps",
						event.target.value,
						exrInd,
						setInd
					)
				}
			/>
		</Cell>
		<Cell align="center" complete={set.complete}>
			<Input
				complete={set.complete}
				type="number"
				value={set.rest}
				onChange={event =>
					modifySet(
						"edit",
						"rest",
						event.target.value,
						exrInd,
						setInd
					)
				}
			/>
		</Cell>
		<Cell
			align="right"
			borderRadius={"0px 5px 5px 0px"}
			complete={set.complete}
		>
			<ButtonClear
				onClick={() => modifySet("drop", null, null, exrInd, setInd)}
			>
				<Icon
					icon={["fas", "square"]}
					fontSize="20px"
					color={set.complete ? "#9AE6B4" : "#edf2f7"}
				/>
			</ButtonClear>
		</Cell>
	</tr>
);

const Cell = styled.td`
	width: ${props => props.width};
	padding: 4px 12px;
	vertical-align: middle;
	text-align: ${props => props.align};
	border-radius: ${props => props.borderRadius};
	background: ${props => (props.complete ? "#C6F6D5" : "none")};
`;

const Input = styled.input`
	width: 50px;
	padding: 4px;
	border: none;
	border-radius: 4px;
	background: ${props => (props.complete ? "#9AE6B4" : "#edf2f7")};
	outline: none;
	text-align: center;
	font-size: 14px;
	font-family: inherit;
	color: ${props => (props.complete ? "#276749" : "#4a5568")};
`;

export default SetsRow;
