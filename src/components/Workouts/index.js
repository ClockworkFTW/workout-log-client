import React, { useCallback } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";

import MainLayout from "../common/MainLayout";
import Menu from "./Menu";
import Picker from "./Picker";
import Editor from "./Editor";

const Main = styled.div`
	display: flex;
	height: calc(100% - 56px);
`;

const Workouts = () => {
	const onDragEnd = useCallback(() => {
		// the only one that is required
	}, []);

	return (
		<MainLayout>
			<Menu />
			<Main>
				<DragDropContext>
					<Picker />
					<Editor />
				</DragDropContext>
			</Main>
		</MainLayout>
	);
};

export default Workouts;
