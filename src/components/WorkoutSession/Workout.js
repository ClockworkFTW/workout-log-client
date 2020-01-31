import React, { useCallback } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";

import Exercise from "./Exercise";

const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 0px 20px;
	overflow: scroll;
`;

const Workout = ({ workout, modifySet, startRestTimer, resetRestTimer }) => {
	const onDragEnd = useCallback(() => {
		// the only one that is required
	}, []);

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Container>
				{workout.exercises.map((exercise, index) => (
					<Exercise
						key={index}
						exercise={exercise}
						exrInd={index}
						modifySet={modifySet}
						startRestTimer={startRestTimer}
						resetRestTimer={resetRestTimer}
					/>
				))}
			</Container>
		</DragDropContext>
	);
};

export default Workout;
