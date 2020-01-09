import React from "react";
import styled from "styled-components";

const Container = styled.div`
	margin-bottom: ${props => props.margin};
`;
const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	text-transform: capitalize;
	font-size: 12px;
	color: #2d3748;
`;

const InputGroup = ({ id, label, margin, children }) => (
	<Container margin={margin}>
		<Label htmlFor={id}>{label}</Label>
		{children}
	</Container>
);

export default InputGroup;
