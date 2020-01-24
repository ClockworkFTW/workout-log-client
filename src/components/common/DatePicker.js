import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
	border: 1px solid #e2e8f0;
	border-radius: 5px;
`;
const Header = styled.div`
	padding: 10px;
	border-bottom: 1px solid #e2e8f0;
`;
const Controls = styled.div`
	margin-bottom: 5px;
	display: flex;
	justify-content: space-between;
`;
const Year = styled.h1`
	margin: 0px 5px;
	font-weight: 700;
`;
const HeaderWeek = styled.div`
	display: flex;
	justify-content: space-between;
`;
const HeaderWeekDay = styled.h6`
	font-size: 12px;
`;
const Body = styled.div`
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
	color: ${props => (props.active ? "#ffffff" : "#2e3749")};
	border-radius: 5px;
	&:hover {
		cursor: pointer;
		background: #809cf5;
		color: #ffffff;
	}
`;
const Button = styled.button``;

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

const DatePicker = ({ value, onChange }) => {
	const [now, setNow] = useState(moment(value));

	return (
		<Container>
			<Header>
				<Controls>
					<Button
						onClick={() => setNow(moment(now).subtract(1, "M"))}
					>
						prev
					</Button>
					<Year>{now.format("MMM YYYY")}</Year>
					<Button onClick={() => setNow(moment(now).add(1, "M"))}>
						next
					</Button>
				</Controls>
				<HeaderWeek>
					{moment.weekdaysMin().map(weekday => (
						<HeaderWeekDay>{weekday}</HeaderWeekDay>
					))}
				</HeaderWeek>
			</Header>
			<Body>
				{getMonth(now).map(week => (
					<BodyWeek>
						{week.map(day => (
							<BodyWeekDay
								active={
									moment(value).format("YYYY-MM-DD") ===
									moment(day).format("YYYY-MM-DD")
								}
								onClick={() =>
									onChange(moment(day).format("YYYY-MM-DD"))
								}
							>
								{moment(day).format("DD")}
							</BodyWeekDay>
						))}
					</BodyWeek>
				))}
			</Body>
		</Container>
	);
};

export default DatePicker;
