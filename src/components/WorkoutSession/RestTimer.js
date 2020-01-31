import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import { resetRestTimer } from "../../reducers/workout-session";
import { Icon } from "../common";

const RestTimer = ({ time, resetRestTimer }) => {
	const { restDuration, restEnd } = time;

	// Get current timer state from redux
	const getTimer = () => {
		const now = new Date();
		const timer = moment.utc(restEnd - now).format("mm:ss");
		return timer;
	};

	// Get timer progress as a percentage
	const getProgress = () => {
		const a = moment(restEnd);
		const b = moment();
		const difference = a.diff(b);
		const progress = Math.floor((difference / restDuration) * 100);
		return progress;
	};

	// Declare and initialize component timer / progress state
	const [timer, setTimer] = useState(getTimer());
	const [progress, setProgress] = useState(getProgress());

	useEffect(() => {
		// Count down timer (end time - now)
		const interval = setInterval(() => {
			setProgress(getProgress(restEnd, restDuration));
			setTimer(getTimer(restEnd));
		}, 1000);
		// Clear countdown timer interval after rest is over and reset rest timer state
		const timeout = setTimeout(() => {
			clearInterval(interval);
			resetRestTimer();
		}, restDuration);
		// Clear timeout on unmount
		return () => clearTimeout(timeout);
	}, []);

	return (
		<Container progress={progress} onClick={resetRestTimer}>
			<Timer>
				<Icon icon={["far", "clock"]} margin="0px 10px 0px 0px" />
				{timer}
			</Timer>
			<Progress>
				<Bar progress={progress} />
			</Progress>
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	padding: 5px 10px;
	border-radius: 5px;
	background: #cbd5e0;
	overflow: hidden;
	&:hover {
		cursor: pointer;
	}
`;
const Progress = styled.div`
	z-index: 5;
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
`;
const Bar = styled.div`
	width: ${props => `${props.progress}%`};
	height: 100%;
	background: #5a67d8;
	transition: width 1s linear;
`;
const Timer = styled.h1`
	position: relative;
	z-index: 10;
	color: #ffffff;
	font-size: 14px;
`;

const mapStateToProps = state => ({ time: state.workoutSession.time });

const mapActionsToProps = { resetRestTimer };

export default connect(mapStateToProps, mapActionsToProps)(RestTimer);
