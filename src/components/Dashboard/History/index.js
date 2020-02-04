import React from "react";
import styled from "styled-components";

import Session from "./Session";

const History = ({ sessions }) =>
	sessions ? (
		<Container>
			{sessions.map(session => (
				<Session session={session} />
			))}
		</Container>
	) : null;

const Container = styled.div`
	display: flex;
	flex-wrap: nowrap;
	overflow-x: auto;
	height: 200px;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export default History;
