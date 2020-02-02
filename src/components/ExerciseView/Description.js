import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Description = ({ description }) => {
	return (
		<Container>
			<h1>description</h1>
			<p>{description}</p>
		</Container>
	);
};

export default Description;
