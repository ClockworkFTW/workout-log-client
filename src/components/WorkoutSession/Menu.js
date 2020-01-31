import React from "react";
import styled from "styled-components";

import { Header3, ButtonPrimary } from "../common";
import SessionTimer from "./SessionTimer";
import RestTimer from "./RestTimer";

const Menu = ({ token, session, createHistory, finishWorkout }) => {
	const { workout, time } = session;

	const handleFinishWorkout = () => {
		const history = {
			workout,
			time: { start: time.sessionStart, stop: new Date() }
		};
		createHistory(token, history);
		finishWorkout();
	};

	return (
		<Container>
			<Info>
				<Header3 margin="0px 10px 0px 0px">{workout.name}</Header3>
				{time.restDuration ? <RestTimer /> : <SessionTimer />}
			</Info>
			<Buttons>
				<ButtonPrimary onClick={finishWorkout}>cancel</ButtonPrimary>
				<ButtonPrimary onClick={handleFinishWorkout}>
					finish
				</ButtonPrimary>
			</Buttons>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Info = styled.div`
	display: flex;
	align-items: center;
`;
const Buttons = styled.div``;

export default Menu;
