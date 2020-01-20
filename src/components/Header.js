import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
	padding: 10px 20px;
	border-bottom: 1px solid #e2e8f0;
`;

const Header = ({ children, setHeaderHeight }) => {
	const headerElement = useRef(null);

	useEffect(() => {
		setHeaderHeight(headerElement.current.clientHeight + 1);
	}, []);

	return <Container ref={headerElement}>{children}</Container>;
};

export default Header;
