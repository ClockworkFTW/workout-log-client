import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledButton = styled.button`
	width: ${props => props.width};
	padding: 5px 10px;
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

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Icon = styled(FontAwesomeIcon)``;

const Text = styled.h3``;

const Button = ({ type, text, icon, width, render, onClick }) =>
	render ? (
		<StyledButton type={type} width={width} onClick={onClick}>
			<Content>
				{icon && <Icon icon={icon} />}
				{text && <Text>{text}</Text>}
			</Content>
		</StyledButton>
	) : null;

export default Button;
