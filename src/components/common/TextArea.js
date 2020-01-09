import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
	width: ${props => props.width};
	height: ${props => props.height};
	padding: 5px 10px;
	font-family: inherit;
	font-size: 14px;
	line-height: 20px;
	background: #ffffff;
	outline: none;
	border: 1px solid #e2e8f0;
	border-radius: 5px;
	color: #2d3748;
	resize: none;
	overflow: scroll;
	&:focus {
		padding: 4px 9px;
		border: 2px solid #667eea;
	}
`;

const TextArea = ({ width, height, value, setValue }) => (
	<StyledTextArea
		width={width}
		height={height}
		value={value}
		onChange={event => setValue(event.target.value)}
	/>
);

export default TextArea;
