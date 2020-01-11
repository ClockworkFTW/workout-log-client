import React from "react";
import styled from "styled-components";

import MainLayout from "./common/MainLayout";

const Container = styled.div`
	padding: 20px;
`;

const Dashboard = () => (
	<MainLayout>
		<Container>
			<h1>Dashboard</h1>
		</Container>
	</MainLayout>
);

export default Dashboard;
