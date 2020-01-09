import React from "react";
import styled from "styled-components";

import Sidebar from "../Sidebar";

const Container = styled.div`
	display: flex;
	height: calc(100vh - 45px);
`;
const Main = styled.div`
	width: 100%;
	background: #edf2f7;
`;

const MainLayout = ({ children }) => (
	<Container>
		<Sidebar />
		<Main>{children}</Main>
	</Container>
);

export default MainLayout;
