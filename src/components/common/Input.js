import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
	width: ${props => props.width};
	padding: 5px 10px;
	font-family: inherit;
	font-size: 14px;
	text-transform: capitalize;
	background: #ffffff;
	outline: none;
	border: 1px solid #e2e8f0;
	border-radius: 5px;
	color: #2d3748;
	&:focus {
		padding: 4px 9px;
		border: 2px solid #667eea;
	}
	&::placeholder {
		color: #ccd5e1;
	}
`;

const Input = ({ width, id, type, placeholder, value, setValue }) => (
	<StyledInput
		width={width}
		id={id}
		type={type}
		placeholder={placeholder}
		value={value}
		onChange={event => setValue(event.target.value)}
	/>
);

export default Input;
