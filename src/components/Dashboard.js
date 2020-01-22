import React from "react";
import styled from "styled-components";

import MainLayout from "./common/MainLayout";

const Menu = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Container = styled.div`
	padding: 20px;
`;

const Dashboard = () => (
	<MainLayout>
		<Menu>
			<h1>menu</h1>
		</Menu>
		<Container>
			<h1>dashboard</h1>
		</Container>
	</MainLayout>
);

export default Dashboard;
