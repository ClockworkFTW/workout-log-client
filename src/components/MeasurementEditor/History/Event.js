import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Input, ButtonPrimary } from "../../common";
import DatePicker from "../../common/DatePicker";

const Container = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 5px;
	padding: 10px 10px 10px 15px;
	border: 1px solid #e2e8f0;
	border-radius: 5px;
	background: #ffffff;
	transition: all 0.2s ease-in-out;
	&:hover {
		padding: 9px 9px 9px 14px;
		border: 2px solid #687eea;
		box-shadow: 0px 3px 6px 0px rgba(102, 126, 234, 0.2);
	}
`;

const Icon = styled(FontAwesomeIcon)`
	margin: ${props => props.margin};
`;

const History = ({ index, data, modifyMeasurement, deleteMeasurement }) => (
	<Container>
		<DateInput
			data={data}
			index={index}
			modifyMeasurement={modifyMeasurement}
		/>
		<Input
			type="number"
			width="50px"
			margin="none"
			align="center"
			value={data.y || ""}
			onChange={event =>
				modifyMeasurement(null, data.x, event.target.value)
			}
		/>
		<ButtonPrimary onClick={() => deleteMeasurement(data.x)}>
			<Icon icon={["far", "trash-alt"]} />
		</ButtonPrimary>
	</Container>
);

const DateContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
`;

const DateDisplay = styled.h1`
	display: flex;
	align-items: center;
	font-size: 14px;
	color: #4b5668;
	&:hover {
		cursor: pointer;
	}
`;

const DateInput = ({ data, index, modifyMeasurement }) => {
	const [toggle, setToggle] = useState(true);
	return (
		<DateContainer>
			<DateDisplay onClick={() => setToggle(!toggle)}>
				<Icon icon={["far", "calendar"]} margin="0px 5px 0px 0px" />
				{moment(data.x).format("MMM D, YYYY")}
			</DateDisplay>
			<DatePicker
				hide={toggle}
				setHide={setToggle}
				anchor={[null, null, "0px", "0px"]}
				value={data.x}
				onChange={day => modifyMeasurement(index, day, data.y)}
			/>
		</DateContainer>
	);
};

export default History;
