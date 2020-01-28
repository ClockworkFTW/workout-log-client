import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";

import { ButtonPrimary } from "../common";

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Menu = ({ name, startedAt, finishedAt, finishWorkout }) => {
	const [timer, setTimer] = useState(
		moment.utc(new Date() - startedAt).format("HH:mm:ss")
	);

	useEffect(() => {
		setInterval(
			() =>
				setTimer(moment.utc(new Date() - startedAt).format("HH:mm:ss")),
			1000
		);
	}, []);

	return (
		<Container>
			<h1>
				{name} {timer}
			</h1>
			<ButtonPrimary onClick={finishWorkout}>finish</ButtonPrimary>
		</Container>
	);
};

export default Menu;
