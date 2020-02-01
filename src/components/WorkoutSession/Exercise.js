import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

import { RouterLink, Header4, ButtonAction, Icon } from "../common";
import SetsTable from "./SetsTable";

const Exercise = ({
	exercise,
	exrInd,
	modifySet,
	startRestTimer,
	resetRestTimer
}) => (
	<Draggable draggableId={exercise.exercise.dragId} index={exrInd}>
		{(provided, snapshot) => (
			<Container
				ref={provided.innerRef}
				{...provided.draggableProps}
				{...provided.dragHandleProps}
			>
				<Header>
					<RouterLink to={`/exercise-list/${exercise.exercise._id}`}>
						<Header4>{exercise.exercise.name}</Header4>
					</RouterLink>
					<Icon icon={["fas", "ellipsis-h"]} color="#4A5568"></Icon>
				</Header>
				<SetsTable
					exercise={exercise}
					exrInd={exrInd}
					modifySet={modifySet}
					startRestTimer={startRestTimer}
					resetRestTimer={resetRestTimer}
				/>
				<Footer>
					<ButtonAction
						width="100%"
						onClick={() => modifySet("add", null, null, exrInd)}
					>
						add set
					</ButtonAction>
				</Footer>
			</Container>
		)}
	</Draggable>
);

const Container = styled.div`
	margin-bottom: 20px;
	background: #ffffff;
	border: 1px solid #e2e8f0;
	border-radius: 4px;
`;
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 20px;
	border-bottom: 1px solid #e2e8f0;
`;
const Footer = styled.div`
	padding: 16px 20px;
	border-top: 1px solid #e2e8f0;
`;

export default Exercise;
