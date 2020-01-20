import React from "react";
import styled from "styled-components";

const Container = styled.div`
	padding: 20px;
`;

const Logo = ({ toggle }) => (
	<Container toggle={toggle}>
		<h1>Logo</h1>
	</Container>
);

export default Logo;
