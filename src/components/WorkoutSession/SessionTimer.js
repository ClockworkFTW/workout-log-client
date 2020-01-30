import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import moment from "moment";

const Container = styled.div``;

const SessionTimer = ({ startedAt }) => {
	const [timer, setTimer] = useState(
		moment.utc(new Date() - startedAt).format("HH:mm:ss")
	);

	useEffect(() => {
		const interval = setInterval(() => {
			const time = moment.utc(new Date() - startedAt).format("HH:mm:ss");
			setTimer(time);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return <Container>{timer}</Container>;
};

const mapStateToProps = state => ({
	startedAt: state.workoutSession.startedAt
});

export default connect(mapStateToProps)(SessionTimer);
