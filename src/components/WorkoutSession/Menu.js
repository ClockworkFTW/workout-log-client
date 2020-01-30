import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { finishWorkout } from "../../reducers/workout-session";
import { Header3, ButtonPrimary } from "../common";
import SessionTimer from "./SessionTimer";
import RestTimer from "./RestTimer";

const Menu = ({ name, restDuration, finishWorkout }) => (
	<Container>
		<Info>
			<Header3 margin="0px 10px 0px 0px">{name}</Header3>
			{restDuration ? <RestTimer /> : <SessionTimer />}
		</Info>
		<ButtonPrimary onClick={finishWorkout}>finish</ButtonPrimary>
	</Container>
);

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

const mapStateToProps = state => ({
	restDuration: state.workoutSession.restDuration
});

export default connect(mapStateToProps, { finishWorkout })(Menu);
