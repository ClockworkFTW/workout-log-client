import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;
	height: ${props => props.height};
	padding: 0px 20px;
	border-bottom: 1px solid #e2e8f0;
	background: #ffffff;
`;

const Header = ({ children, headerHeight }) => (
	<Container height={headerHeight}>{children}</Container>
);

export default Header;
