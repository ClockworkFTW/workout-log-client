import React from "react";
import styled from "styled-components";

import MainLayout from "./common/MainLayout";

const Menu = styled.div``;
const Container = styled.div`
	padding: 20px;
`;

const Settings = () => (
	<MainLayout>
		<Menu>
			<h1>menu</h1>
		</Menu>
		<Container>
			<h1>settings</h1>
		</Container>
	</MainLayout>
);

export default Settings;
