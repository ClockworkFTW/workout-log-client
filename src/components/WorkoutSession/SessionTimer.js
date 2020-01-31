import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import moment from "moment";

const SessionTimer = ({ time }) => {
	const { sessionStart } = time;

	// Get current timer state from redux
	const getTimer = () =>
		moment.utc(new Date() - sessionStart).format("HH:mm:ss");

	// Declare and initialize component timer state
	const [timer, setTimer] = useState(getTimer);

	// Update component timer state every 1 second
	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(getTimer);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return <Container>{timer}</Container>;
};

const Container = styled.div``;

const mapStateToProps = state => ({
	time: state.workoutSession.time
});

export default connect(mapStateToProps)(SessionTimer);
