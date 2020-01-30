import React from "react";
import styled from "styled-components";

import { setType } from "../../config";
import { Header4, ButtonClear, Icon } from "../common";
import SelectInput from "../common/SelectInput";

// Exercise table

const Exercise = props => {
	const {
		exercise,
		exerciseIndex,
		modifySet,
		startRestTimer,
		resetRestTimer
	} = props;

	const handleCompleteSet = (prop, complete, setIndex, time) => {
		// Fix timer reset
		resetRestTimer();
		if (!complete) {
			startRestTimer(time);
		}
		modifySet(prop, !complete, exerciseIndex, setIndex);
	};

	return (
		<Container>
			<Header>
				<Header4>{exercise.exercise.name}</Header4>
			</Header>
			<Table>
				<Head
					headers={[
						{ align: "left", text: "done" },
						{ align: "center", text: "type" },
						{ align: "center", text: "weight" },
						{ align: "center", text: "sets" },
						{ align: "center", text: "rest" }
					]}
				/>
				<Body
					exercise={exercise}
					exerciseIndex={exerciseIndex}
					handleCompleteSet={handleCompleteSet}
					modifySet={modifySet}
				/>
			</Table>
		</Container>
	);
};

const Container = styled.div`
	max-width: 500px;
	margin: 20px auto;
	background: #ffffff;
	border: 1px solid #e2e8f0;
	border-radius: 4px;
`;
const Header = styled.div`
	padding: 16px 20px;
	border-bottom: 1px solid #e2e8f0;
`;
const Table = styled.table`
	width: 100%;
	padding: 12px;
	border-collapse: separate;
	border-spacing: 0px 4px;
`;

// Exercise table head

const Head = ({ headers }) => (
	<thead>
		<tr>
			{headers.map((header, index) => (
				<HeaderCell key={index} align={header.align}>
					{header.text}
				</HeaderCell>
			))}
		</tr>
	</thead>
);

const HeaderCell = styled.th`
	padding: 4px 12px;
	text-align: ${props => props.align};
	font-size: 12px;
	text-transform: uppercase;
	color: #a0aec0;
`;

// Exercise table body

const Body = ({ exercise, exerciseIndex, handleCompleteSet, modifySet }) => (
	<tbody>
		{exercise.sets.map((set, index) => (
			<tr key={index}>
				<BodyCell
					align="left"
					borderRadius={"5px 0px 0px 5px"}
					complete={set.complete}
				>
					<ButtonClear
						onClick={() =>
							handleCompleteSet(
								"complete",
								set.complete,
								index,
								set.rest
							)
						}
					>
						<Icon
							icon={[
								"fas",
								set.complete ? "check-square" : "square"
							]}
							fontSize="20px"
							color={set.complete ? "#48BB78" : "#edf2f7"}
						/>
					</ButtonClear>
				</BodyCell>
				<BodyCell width="140px" align="center" complete={set.complete}>
					<SelectInput
						width="100%"
						options={setType}
						value={set.setType}
						setValue={option =>
							modifySet("setType", option, exerciseIndex, index)
						}
					/>
				</BodyCell>
				<BodyCell align="center" complete={set.complete}>
					<Input
						type="number"
						value={set.weight}
						onChange={event =>
							modifySet(
								"weight",
								event.target.value,
								exerciseIndex,
								index
							)
						}
					/>
				</BodyCell>
				<BodyCell align="center" complete={set.complete}>
					<Input
						type="number"
						value={set.reps}
						onChange={event =>
							modifySet(
								"reps",
								event.target.value,
								exerciseIndex,
								index
							)
						}
					/>
				</BodyCell>
				<BodyCell
					align="center"
					borderRadius={"0px 5px 5px 0px"}
					complete={set.complete}
				>
					<Input
						type="number"
						value={set.rest}
						onChange={event =>
							modifySet(
								"rest",
								event.target.value,
								exerciseIndex,
								index
							)
						}
					/>
				</BodyCell>
			</tr>
		))}
	</tbody>
);

const BodyCell = styled.td`
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
	background: #edf2f7;
	outline: none;
	text-align: center;
	font-size: 14px;
	font-family: inherit;
	color: #4a5568;
`;

export default Exercise;
