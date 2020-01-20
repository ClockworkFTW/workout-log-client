import React, { useState } from "react";
import styled from "styled-components";

import Header from "../Header";
import Sidebar from "../Sidebar";

const Container = styled.div`
	display: flex;
	height: 100vh;
`;
const Main = styled.div`
	width: 100%;
`;
const Content = styled.div`
	height: ${props => `calc(100% - ${props.headerHeight}px)`};
`;

const MainLayout = ({ children }) => {
	const [headerHeight, setHeaderHeight] = useState(null);
	return (
		<Container>
			<Sidebar />
			<Main>
				<Header setHeaderHeight={setHeaderHeight}>{children[0]}</Header>
				<Content headerHeight={headerHeight}>{children[1]}</Content>
			</Main>
		</Container>
	);
};

export default MainLayout;
