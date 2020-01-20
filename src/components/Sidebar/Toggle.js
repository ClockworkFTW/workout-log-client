import React from "react";
import styled from "styled-components";

const Container = styled.div`
	padding: 20px;
`;

const Navigation = ({ toggle, toggleSidebar }) => (
	<Container toggle={toggle}>
		<h1 onClick={toggleSidebar}>toggle</h1>
	</Container>
);

export default Navigation;
