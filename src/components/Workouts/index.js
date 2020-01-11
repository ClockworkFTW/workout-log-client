import React from "react";
import styled from "styled-components";

import MainLayout from "../common/MainLayout";
import Menu from "./Menu";
import Picker from "./Picker";
import Editor from "./Editor";

const Main = styled.div`
	display: flex;
	height: calc(100% - 56px);
`;

const Workouts = () => (
	<MainLayout>
		<Menu />
		<Main>
			<Picker />
			<Editor />
		</Main>
	</MainLayout>
);

export default Workouts;
