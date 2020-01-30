import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
	position: relative;
	margin: ${props => props.margin};
	width: ${props => props.width};
`;
const Selected = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${props => (props.toggle ? "4px 9px" : "5px 10px")};
	background: #ffffff;
	border: ${props =>
		props.toggle ? "2px solid #687eea" : "1px solid #e2e8f0"};
	border-radius: 5px;
	font-size: 14px;
	text-transform: capitalize;
	line-height: 18px;
	color: #2d3748;
	&:hover {
		cursor: pointer;
	}
`;
const Icon = styled(FontAwesomeIcon)`
	font-size: 12px;
`;

const SelectInput = ({ options, width, margin, value, setValue }) => {
	const [toggle, setToggle] = useState(false);
	const filteredOptions = options.filter(option => option !== value);

	const handleSelect = option => {
		setValue(option);
		setToggle(!toggle);
	};

	return (
		<Wrapper
			width={width}
			margin={margin}
			onClick={() => setToggle(!toggle)}
		>
			<Selected toggle={toggle}>
				{value}
				<Icon icon={["fas", toggle ? "chevron-up" : "chevron-down"]} />
			</Selected>
			{toggle ? (
				<Options
					options={filteredOptions}
					handleSelect={handleSelect}
				/>
			) : null}
		</Wrapper>
	);
};

const Container = styled.div`
	z-index: 10;
	position: absolute;
	left: 0px;
	right: 0px;
	transform: translateY(10px);
	border: 1px solid #e2e8f0;
	border-radius: 5px;
	box-shadow: 0px 3px 6px 0px rgba(102, 126, 234, 0.2);
	overflow: hidden;
`;
const Option = styled.div`
	padding: 5px 10px;
	background: #ffffff;
	font-size: 14px;
	text-transform: capitalize;
	text-align: left;
	line-height: 18px;
	color: #2d3748;
	transition: all ease-in-out 0.1s;
	&:hover {
		cursor: pointer;
		background: #667eea;
		color: #ffffff;
	}
`;

const Options = ({ options, handleSelect }) => (
	<Container>
		{options.map(option => (
			<Option key={option} onClick={() => handleSelect(option)}>
				{option}
			</Option>
		))}
	</Container>
);

export default SelectInput;
