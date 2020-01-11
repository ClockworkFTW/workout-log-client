import styled from "styled-components";

export const Input = styled.input`
	width: ${props => props.width};
	margin: ${props => props.margin};
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

export const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	text-transform: capitalize;
	font-size: 12px;
	color: #2d3748;
`;

export const Group = styled.div`
	margin-bottom: ${props => props.margin || "20px"};
`;

export const Button = styled.button`
	width: ${props => props.width};
	padding: 5px 10px;
	font-family: inherit;
	text-transform: uppercase;
	font-size: 12px;
	color: #2d3748;
	border: 1px solid #e2e8f0;
	border-radius: 5px;
	background: #ffffff;
	outline: none;
	transition: all ease-in-out 0.1s;
	&:hover {
		cursor: pointer;
		background: #677eea;
		border: 1px solid #677eea;
		color: #ffffff;
	}
`;
