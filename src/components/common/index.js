import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Group = styled.div`
	margin: ${props => props.margin || "0px 0px 20px 0px"};
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	text-transform: capitalize;
	font-size: 12px;
	color: #2d3748;
`;

export const Input = styled.input`
	width: ${props => props.width};
	margin: ${props => props.margin};
	padding: 5px 10px;
	text-align: ${props => props.align || "left"};
	font-family: inherit;
	font-size: 14px;
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

export const TextArea = styled.textarea`
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

// Buttons

const sharedButton = css`
	width: ${props => props.width};
	padding: 5px 10px;
	font-family: inherit;
	text-transform: uppercase;
	font-size: 12px;
	border-radius: 5px;
	outline: none;
	transition: all ease-in-out 0.1s;
`;

export const ButtonPrimary = styled.button`
	${sharedButton}
	color: #2d3748;
	border: 1px solid #e2e8f0;
	background: #ffffff;
	&:hover {
		cursor: pointer;
		background: #677eea;
		border: 1px solid #677eea;
		color: #ffffff;
	}
`;

export const ButtonAction = styled.button`
	${sharedButton}
	color: #ffffff;
	border: 1px solid #677eea;
	background: #677eea;
	&:hover {
		cursor: pointer;
		background: #ffffff;
		color: #677eea;
	}
`;

//Headers
const sharedHeader = css`
	margin-top: 5px;
	margin-bottom: 10px;
	font-weight: 700;
	text-transform: capitalize;
	color: #2d3748;
`;

export const Header1 = styled.h1`
	${sharedHeader};
	font-size: 36px;
`;
export const Header2 = styled.h2`
	${sharedHeader};
	font-size: 28px;
`;
export const Header3 = styled.h3`
	${sharedHeader};
	font-size: 20px;
`;
export const Header4 = styled.h4`
	${sharedHeader};
	font-size: 16px;
`;
export const Header5 = styled.h5`
	${sharedHeader};
	font-size: 14px;
`;
export const Header6 = styled.h6`
	${sharedHeader};
	font-size: 12px;
`;

// Paragraph
export const Paragraph = styled.p`
	margin-bottom: 20px;
	font-size: 14px;
	color: #718196;
`;

// Links
export const RouterLink = styled(Link)`
	text-decoration: none;
	font-weight: 700;
	color: #687eea;
`;

export const AnchorLink = styled.a`
	text-decoration: none;
	font-weight: 700;
	color: #687eea;
`;

// Metadata
export const Metadata = styled.span`
	text-transform: capitalize;
	font-size: 14px;
	color: #a0aec0;
`;

// Tags
export const Tag = styled.div`
	display: inline-block;
	padding: 5px;
	font-size: 12px;
	font-weight: 700;
	text-transform: uppercase;
	border-radius: 5px;
	background: #677eea;
	color: #ffffff;
`;
