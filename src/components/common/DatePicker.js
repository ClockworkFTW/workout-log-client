import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
	z-index: 10;
	position: absolute;
	top: ${props => props.anchor[0]};
	right: ${props => props.anchor[1]};
	bottom: ${props => props.anchor[2]};
	left: ${props => props.anchor[3]};
	transform: translateY(calc(100% + 10px));
	border: 1px solid #e2e8f0;
	border-radius: 5px;
	box-shadow: 0px 3px 6px 0px rgba(102, 126, 234, 0.2);
	background: #ffffff;
`;

const DatePicker = ({ hide, setHide, anchor, value, onChange }) => {
	const [now, setNow] = useState(moment(value));

	const handleSelect = day => {
		onChange(moment(day).format("YYYY-MM-DD"));
		setHide(true);
	};

	return (
		!hide && (
			<Container anchor={anchor}>
				<Header now={now} setNow={setNow} />
				<Body value={value} now={now} handleSelect={handleSelect} />
			</Container>
		)
	);
};

const HeaderContainer = styled.div`
	width: 100%;
	padding: 10px;
	border-bottom: 1px solid #e2e8f0;
`;
const Controls = styled.div`
	margin-bottom: 5px;
	display: flex;
	justify-content: space-between;
`;
const Icon = styled(FontAwesomeIcon)``;
const Button = styled.button`
	border: none;
	outline: none;
	background: none;
	&:hover {
		cursor: pointer;
	}
`;
const Year = styled.h1`
	margin: 0px 5px;
	font-weight: 700;
	color: #2d3748;
`;
const HeaderWeek = styled.div`
	display: flex;
	justify-content: space-between;
`;
const HeaderWeekDay = styled.h6`
	font-size: 12px;
	color: #a0aec0;
`;

const Header = ({ now, setNow }) => (
	<HeaderContainer>
		<Controls>
			<Button onClick={() => setNow(moment(now).subtract(1, "M"))}>
				<Icon icon={["fas", "caret-left"]} />
			</Button>
			<Year>{now.format("MMM YYYY")}</Year>
			<Button onClick={() => setNow(moment(now).add(1, "M"))}>
				<Icon icon={["fas", "caret-right"]} />
			</Button>
		</Controls>
		<HeaderWeek>
			{moment.weekdaysMin().map(weekday => (
				<HeaderWeekDay key={weekday}>{weekday}</HeaderWeekDay>
			))}
		</HeaderWeek>
	</HeaderContainer>
);

const BodyContainer = styled.div`
	padding: 5px;
`;
const BodyWeek = styled.div`
	display: flex;
	justify-content: space-between;
`;
const BodyWeekDay = styled.h3`
	padding: 5px;
	font-size: 12px;
	background: ${props => (props.active ? "#5a68d8" : "#ffffff")};
	color: ${props => (props.active ? "#ffffff" : "#4A5568")};
	border-radius: 5px;
	&:hover {
		cursor: pointer;
		background: #809cf5;
		color: #ffffff;
	}
`;

const getMonth = now => {
	const start = moment(now)
		.startOf("month")
		.startOf("week");

	let month = [[], [], [], [], []];

	return month.map((week, index) => {
		let days = [];
		for (let i = 0; i < 7; i++) {
			days.push(
				moment(start)
					.add(index, "W")
					.add(i, "d")
			);
		}
		return days;
	});
};

const Body = ({ value, now, handleSelect }) => {
	const isActive = day =>
		moment(value).format("YYYY-MM-DD") === moment(day).format("YYYY-MM-DD");

	return (
		<BodyContainer>
			{getMonth(now).map((week, index) => (
				<BodyWeek key={index}>
					{week.map((day, index) => (
						<BodyWeekDay
							key={index}
							active={isActive(day)}
							onClick={() => handleSelect(day)}
						>
							{moment(day).format("DD")}
						</BodyWeekDay>
					))}
				</BodyWeek>
			))}
		</BodyContainer>
	);
};

export default DatePicker;
